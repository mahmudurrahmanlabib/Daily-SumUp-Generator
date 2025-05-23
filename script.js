function generateSummary() {
  const tickets = document.getElementById('tickets').value;
  const chats = document.getElementById('chats').value;
  const org = document.getElementById('org') ? document.getElementById('org').value : '';
  const github = document.getElementById('github') ? document.getElementById('github').value : '';
  const facebook = document.getElementById('facebook') ? document.getElementById('facebook').value : '';
  const issueAssign = document.getElementById('issueAssign') ? document.getElementById('issueAssign').value : '';
  const docsNew = document.getElementById('docsNew') ? document.getElementById('docsNew').value : '';
  const docsUpdate = document.getElementById('docsUpdate') ? document.getElementById('docsUpdate').value : '';
  const docsKb = document.getElementById('docsKb') ? document.getElementById('docsKb').value : '';
  const meetingsCount = parseInt(document.getElementById('meetingsCount')?.value) || 0;
  let meetingsDetails = [];
  for (let i = 0; i < meetingsCount; i++) {
    const val = document.getElementById(`meeting_${i}`)?.value;
    if (val) meetingsDetails.push(val);
  }
  const meetings = meetingsDetails.length > 0 ? meetingsDetails.join('; ') : '';
  const reviews = document.getElementById('reviews').value;
  const qa = document.getElementById('qa').value;
  const rnd = document.getElementById('rnd') ? document.getElementById('rnd').value : '';
  const learning = document.getElementById('learning').value;
  const gptdata = document.getElementById('gptdata').value;
  const otf = document.getElementById('otf').value;
  const commitment = document.getElementById('commitment').value;

  const summary = `## 📝 Daily Sum-Up Report

Tickets and Live Chats:
Replied to ${tickets || '0'} FreeScout tickets.
Replied to ${chats || '0'} live chats.

ORG, GitHub, and Facebook Replies:
Replied to ${org || '0'} ORG topics.
Replied to ${github || '0'} GitHub issues.
Replied to ${facebook || '0'} Facebook community posts/comments.

Issue Assigning:
Assigned ${issueAssign || '0'} issues to relevant teams.

Documentation (New, Update, Knowledgebase):
Wrote ${docsNew || '0'} new documentation articles.
Updated ${docsUpdate || '0'} existing documentation articles.
Published ${docsKb || '0'} knowledgebase articles.

Meetings:
Attended ${meetingsCount || '0'} meetings${meetings ? ` (${meetings})` : ''}.

Asked for Reviews:
Asked for reviews on ${reviews || '0'} tickets/Clients.

QA and R&D:
Conducted QA on ${qa || '0'} tasks/features.
Researched and documented ${rnd || '0'} R&D topics/issues.

Learning:
Completed ${learning || '0'} hours of learning.

GPT training data:
Added ${gptdata || '0'} GPT Training data

OTF/Additional Tasks:
Completed ${otf || '0'} GPT/OTF tasks.

What do you commit for tomorrow?
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
