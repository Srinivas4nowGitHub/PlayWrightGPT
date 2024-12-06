import {test, expect} from '@playwright/test';
import {ai} from '@zerostep/playwright';
import {chromium} from 'playwright';
import * as fs from 'fs/promises'; // Import the file system module for reading files

// Function to read prompts from a file and execute them
async function readPromptsAndExecute(filePath: string) {
  try {
    const prompts = await fs.readFile(filePath, 'utf-8'); // Read the file
    console.log('Prompts:', prompts); // Log the prompts for debugging
    return prompts.split('\n'); // Return prompts as an array of lines
  } catch (error) {
    console.error('Error reading prompts file:', error);
    throw error;
  }
}

test.describe('allbirds ecommerce website Testing', () => {
  test('write prompts', async () => {
    const browser = await chromium.launch({headless: false}); // Set headless: true for headless mode
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.allbirds.com/');
    await page.waitForLoadState('load');
    const filePath = 'prompts.txt'; // Path to the text file containing prompts
    const prompts = await readPromptsAndExecute(filePath); // Read and process prompts
    console.log('File path:', filePath);

    // const options = { model: 'gpt-4-1106-preview' }; // Correct object syntax

    for (const prompt of prompts) {
      console.log(`Executing prompt: ${prompt}`);
      await ai(prompt, {page, test}); // Execute each prompt
    }
  });
});
