async function generateName(description: string) {
    const prompt = `Generate a name for a startup that ${description}.`;
    const model = 'text-davinci-002';
    const completions = await openai.completions.create({
      engine: model,
      prompt,
      maxTokens: 60,
      n: 1,
      stop: '\n'
    });
    const name = completions.choices[0].text.trim();
    return name;
  }
  