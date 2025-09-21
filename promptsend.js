async function sendPromptToOllama(prompt) {
  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gemma',     // or codellama, codegemma, etc.
      prompt: prompt,
      stream: false
    })
  });

  const data = await response.json();
  return data.response;
}
