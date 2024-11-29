# PlaywrightGPT

This project allows you to control your browser using natural language. It integrates OpenAI's GPT-4 with the Playwright library, enabling seamless browser navigation. GPT-4 generates code snippets, which Playwright executes to carry out specified tasks.

## Demo

[![PlaywrightGPT Demo](https://img.youtube.com/vi/DH9cIm1qfug/0.jpg)](https://www.youtube.com/watch?v=DH9cIm1qfug)

## Installation

### Install the required packages:

```sh
npm install
```

### Create a `.env` file in the project root directory and add the following line:

```
OPENAI_API_KEY=your_openai_api_key
```

Replace `your_openai_api_key` with your actual OpenAI API key.

### Run the script:

```sh
npm run start
```

### Options:

```
Usage: node index.js -o code.spec.js

Options:
  -a, --autogpt                          run with autogpt (default: false)
  -m, --model <model>                    openai model to use (default: "gpt-4-1106-preview")
  -o, --outputFilePath <outputFilePath>  path to store test code
  -u, --url <url>                        url to start on (default: "https://www.google.com")
  -v, --viewport <viewport>              viewport size to use (default: "1280,720")
  -h, --help                             display help for command
```

## Usage

The script opens a browser window.

In the terminal, you'll be prompted to enter a task.

Type your task using natural language (e.g., "Generate an interesting phrase and type it into Google") and press Enter.

GPT-4 can recognize buttons and text on the page and will navigate the browser to complete the specified task.

To stop the script, press `Ctrl + C` in the terminal.

## Examples

Here are some example tasks you can input:

- `go to iFixit`
- `Search for Iphone 11 Pro Max Battery`
- `Click on the first iPhone 11 Pro Max Battery and wait for Page to Load`
- `Click the second Add to Cart Button, then Checkout`
- `Fill out the Contact/Shipping forms with fake but believeable data`
- `Select Standard Shipping then Continue to Payment`
- `Wait for "Pay Now" button to be visible`

With `autogpt` enabled, you can also input more complex tasks like:

- `go to hn and click on the first article`
- `use bing and find the abc article`

## Limitations

This script serves as a demonstration of GPT-4 and Playwright integration, and may not perform flawlessly for every task or website. Generated code snippets could fail to execute, or the model might not comprehend specific inputs. Consider providing a more detailed task description or rephrasing your input in these situations. Some websites might be too large to fit in the prompt for smaller models like base `gpt-4`, hence we default to `gpt-4-1106-preview` with 125k tokens.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
