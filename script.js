function generateSummary() {
  const tickets = document.getElementById('tickets').value;
  const chats = document.getElementById('chats').value;
  const reviews = document.getElementById('reviews').value;
  const gptdata = document.getElementById('gptdata').value;
  const meetings = document.getElementById('meetings').value;
  const docs = document.getElementById('docs').value;
  const qa = document.getElementById('qa').value;
  const learning = document.getElementById('learning').value;
  const collab = document.getElementById('collab').value;
  const otf = document.getElementById('otf').value;
  const commitment = document.getElementById('commitment').value;

  const summary = `## 📝 Daily Sum-Up Report

**FreeScout Tickets Replied:** ${tickets}
**Live Chats Replied:** ${chats}
**Reviews Asked:** ${reviews}
**GPT Training Data Added:** ${gptdata}

**Meetings Attended:** ${meetings}

**Docs Worked On:**
${docs}

**QA / R&D:**
${qa}

**Learning:**
${learning}

**Collaborations:**
${collab}

**OTF / Additional Tasks:**
${otf}

**Tomorrow's Commitments:**
${commitment}
`;

  document.getElementById('summaryOutput').value = summary;
}

function copySummary() {
  const output = document.getElementById('summaryOutput');
  output.select();
  document.execCommand('copy');
  alert('Summary copied to clipboard!');
}

function downloadSummary() {
  const text = document.getElementById('summaryOutput').value;
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = 'daily_summary.txt';
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
}
