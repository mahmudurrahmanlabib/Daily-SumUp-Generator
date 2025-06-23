function generateSummary() {
  const tickets = document.getElementById('tickets').value;
  const chats = document.getElementById('chats').value;
  // ORG
  const org = document.getElementById('org') ? document.getElementById('org').value : '';
  let orgLinksArr = [];
  for (let i = 0; i < (parseInt(org) || 0); i++) {
    const url = document.getElementById(`orgLink_${i}`)?.value.trim();
    const text = document.getElementById(`orgLinkText_${i}`)?.value.trim();
    if (url && text) orgLinksArr.push(`<${url} | ${text}>`);
    else if (url) orgLinksArr.push(`<${url}>`);
    else if (text) orgLinksArr.push(text);
  }
  // GitHub
  const github = document.getElementById('github') ? document.getElementById('github').value : '';
  let githubLinksArr = [];
  for (let i = 0; i < (parseInt(github) || 0); i++) {
    const url = document.getElementById(`githubLink_${i}`)?.value.trim();
    const text = document.getElementById(`githubLinkText_${i}`)?.value.trim();
    if (url && text) githubLinksArr.push(`<${url} | ${text}>`);
    else if (url) githubLinksArr.push(`<${url}>`);
    else if (text) githubLinksArr.push(text);
  }
  // Facebook
  const facebook = document.getElementById('facebook') ? document.getElementById('facebook').value : '';
  let facebookLinksArr = [];
  for (let i = 0; i < (parseInt(facebook) || 0); i++) {
    const url = document.getElementById(`facebookLink_${i}`)?.value.trim();
    const text = document.getElementById(`facebookLinkText_${i}`)?.value.trim();
    if (url && text) facebookLinksArr.push(`<${url} | ${text}>`);
    else if (url) facebookLinksArr.push(`<${url}>`);
    else if (text) facebookLinksArr.push(text);
  }
  // Issues Assigned
  const issueAssign = document.getElementById('issueAssign') ? document.getElementById('issueAssign').value : '';
  let issueAssignLinksArr = [];
  for (let i = 0; i < (parseInt(issueAssign) || 0); i++) {
    const url = document.getElementById(`issueAssignLink_${i}`)?.value.trim();
    const text = document.getElementById(`issueAssignLinkText_${i}`)?.value.trim();
    if (url && text) issueAssignLinksArr.push(`<${url} | ${text}>`);
    else if (url) issueAssignLinksArr.push(`<${url}>`);
    else if (text) issueAssignLinksArr.push(text);
  }
  // Docs New
  const docsNew = document.getElementById('docsNew') ? document.getElementById('docsNew').value : '';
  let docsNewLinksArr = [];
  for (let i = 0; i < (parseInt(docsNew) || 0); i++) {
    const url = document.getElementById(`docsNewLink_${i}`)?.value.trim();
    const text = document.getElementById(`docsNewLinkText_${i}`)?.value.trim();
    if (url && text) docsNewLinksArr.push(`<${url} | ${text}>`);
    else if (url) docsNewLinksArr.push(`<${url}>`);
    else if (text) docsNewLinksArr.push(text);
  }
  // Docs Update
  const docsUpdate = document.getElementById('docsUpdate') ? document.getElementById('docsUpdate').value : '';
  let docsUpdateLinksArr = [];
  for (let i = 0; i < (parseInt(docsUpdate) || 0); i++) {
    const url = document.getElementById(`docsUpdateLink_${i}`)?.value.trim();
    const text = document.getElementById(`docsUpdateLinkText_${i}`)?.value.trim();
    if (url && text) docsUpdateLinksArr.push(`<${url} | ${text}>`);
    else if (url) docsUpdateLinksArr.push(`<${url}>`);
    else if (text) docsUpdateLinksArr.push(text);
  }
  // Docs KB
  const docsKb = document.getElementById('docsKb') ? document.getElementById('docsKb').value : '';
  let docsKbLinksArr = [];
  for (let i = 0; i < (parseInt(docsKb) || 0); i++) {
    const url = document.getElementById(`docsKbLink_${i}`)?.value.trim();
    const text = document.getElementById(`docsKbLinkText_${i}`)?.value.trim();
    if (url && text) docsKbLinksArr.push(`<${url} | ${text}>`);
    else if (url) docsKbLinksArr.push(`<${url}>`);
    else if (text) docsKbLinksArr.push(text);
  }
  // R&D
  const rnd = document.getElementById('rnd') ? document.getElementById('rnd').value : '';
  let rndLinksArr = [];
  for (let i = 0; i < (parseInt(rnd) || 0); i++) {
    const url = document.getElementById(`rndLink_${i}`)?.value.trim();
    const text = document.getElementById(`rndLinkText_${i}`)?.value.trim();
    if (url && text) rndLinksArr.push(`<${url} | ${text}>`);
    else if (url) rndLinksArr.push(`<${url}>`);
    else if (text) rndLinksArr.push(text);
  }

  const meetingsCount = parseInt(document.getElementById('meetingsCount')?.value) || 0;
  let meetingsDetails = [];
  for (let i = 0; i < meetingsCount; i++) {
    const val = document.getElementById(`meeting_${i}`)?.value;
    if (val) meetingsDetails.push(val);
  }
  const meetings = meetingsDetails.length > 0 ? meetingsDetails.join('; ') : '';
  const reviews = document.getElementById('reviews').value;
  const qa = document.getElementById('qa').value;
  const learning = document.getElementById('learning').value;
  const gptdata = document.getElementById('gptdata').value;
  const otf = document.getElementById('otf').value;
  const docs = document.getElementById('docs')?.value || '';

  // Collaboration details
  const collabCount = parseInt(document.getElementById('collabCount')?.value) || 0;
  let collabDetails = [];
  for (let i = 0; i < collabCount; i++) {
    const withWhom = document.getElementById(`collab_with_${i}`)?.value.trim();
    const aboutWhat = document.getElementById(`collab_about_${i}`)?.value.trim();
    if (withWhom && aboutWhat) {
      // Split names by comma and clean up whitespace
      const names = withWhom.split(',').map(name => name.trim()).filter(Boolean);
      
      let formattedNames;
      if (names.length === 1) {
        formattedNames = names[0];
      } else if (names.length === 2) {
        formattedNames = `${names[0]} and ${names[1]}`;
      } else if (names.length >= 3) {
        formattedNames = `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;
      }
      
      collabDetails.push(` - Collaborated with ${formattedNames} regarding '${aboutWhat}'`);
    }
  }

  // Helper to format lines with links/titles
  function formatLine(base, arr) {
    if (arr.length) return `${base} ( ` + arr.join(' , ') + ' )';
    return base;
  }

  let orgLine = formatLine(`Replied to ${org || '0'} ORG topics.`, orgLinksArr);
  let githubLine = formatLine(`Replied to/Created ${github || '0'} GitHub issues.`, githubLinksArr);
  let facebookLine = formatLine(`Replied to ${facebook || '0'} Facebook community posts/comments.`, facebookLinksArr);
  let issueAssignLine = formatLine(`Assigned ${issueAssign || '0'} issues to relevant teams.`, issueAssignLinksArr);
  let docsNewLine = formatLine(`Wrote ${docsNew || '0'} new documentation articles.`, docsNewLinksArr);
  let docsUpdateLine = formatLine(`Updated ${docsUpdate || '0'} existing documentation articles.`, docsUpdateLinksArr);
  let docsKbLine = formatLine(`Published ${docsKb || '0'} knowledgebase articles.`, docsKbLinksArr);

  // QA / R&D Section
  let qaCount = 0;
  let qaTasks = [];
  // Count GitHub Issues Replied/Created as QA tasks
  const githubCount = parseInt(document.getElementById('github').value) || 0;
  if (githubCount > 0) {
    qaCount += githubCount;
    for (let i = 0; i < githubCount; i++) {
      const link = document.getElementById(`githubLink_${i}`)?.value.trim();
      const text = document.getElementById(`githubLinkText_${i}`)?.value.trim();
      if (text) qaTasks.push(text);
    }
  }
  // Add any manual QA tasks from textarea
  const qaText = document.getElementById('qa').value.trim();
  if (qaText) {
    qaTasks = qaTasks.concat(qaText.split(/\n|,/).map(t => t.trim()).filter(Boolean));
    qaCount += qaText.split(/\n|,/).filter(t => t.trim()).length;
  }
  // R&D Section
  let rndCount = 0;
  let rndTopics = [];
  let rndLinksTopics = [];
  const rndNum = parseInt(document.getElementById('rnd').value) || 0;
  for (let i = 0; i < rndNum; i++) {
    const url = document.getElementById(`rndLink_${i}`)?.value.trim();
    const text = document.getElementById(`rndLinkText_${i}`)?.value.trim();
    if (url && text) rndLinksTopics.push(`<${url} | ${text}>`);
    else if (url) rndLinksTopics.push(`<${url}>`);
    else if (text) rndLinksTopics.push(text);
  }
  if (rndNum > 0) {
    rndCount += rndNum;
  }
  // Compose QA / R&D output
  let qaRndOutput = '';
  if (qaCount > 0) {
    qaRndOutput += `Conducted QA on ${qaCount.toString().padStart(2, '0')} tasks/features.`;
    if (qaTasks.length) qaRndOutput += ` (${qaTasks.join(', ')})`;
    qaRndOutput += '\n';
  }
  if (rndCount > 0) {
    qaRndOutput += `Researched and documented ${rndCount.toString().padStart(2, '0')} R&D topics/issues.`;
    if (rndLinksTopics.length) qaRndOutput += ` (${rndLinksTopics.join(', ')})`;
    qaRndOutput += '\n';
  }

  // OTF/Additional Tasks with links
  let otfLines = [];
  if (otf) {
    const otfArr = otf.split('\n').filter(Boolean);
    for (let i = 0; i < otfArr.length; i++) {
      const line = otfArr[i].trim();
      // Try to find a link and text for this line (optional: you can add more logic if you want to support links for OTF)
      otfLines.push(` - ${line}`);
    }
  }

  // Learning section: split by newlines, each as a bullet
  let learningLines = learning.split('\n').map(l => l.trim()).filter(Boolean);
  let learningOutput = learningLines.length ? learningLines.map(l => ` - ${l}`).join('\n') : ' -';

  const summary = `Tickets and Live Chats:
 - Replied to ${tickets || '0'} FreeScout tickets.
 - Replied to ${chats || '0'} live chats.

ORG, GitHub, and Facebook Replies:
 - ${orgLine}
 - ${githubLine}
 - ${facebookLine}

Issue Assigning:
 - ${issueAssignLine}

Documentation (New, Update, Knowledgebase):
 - ${docsNewLine}
 - ${docsUpdateLine}
 - ${docsKbLine}

Meetings:
 - Attended ${meetingsCount || '0'} meetings${meetings ? ` (${meetings})` : ''}.

Collaborations:
${collabCount ? collabDetails.join('\n') : ' -'}

Asked for Reviews:
 - Asked for reviews on ${reviews || '0'} tickets/Clients.

R&D Topics/Issues Documented:
${qaRndOutput ? qaRndOutput.split('\n').filter(Boolean).map(line => ' - ' + line).join('\n') : ''}

Learning:
${learningOutput}

GPT training data:
 - Added ${gptdata || '0'} GPT Training data

OTF/Additional Tasks:
${otfLines.length ? otfLines.join('\n') : ' -'}\n`;

  document.getElementById('summaryOutput').value = summary;
}

function copySummary() {
  const output = document.getElementById('summaryOutput');
  output.select();
  document.execCommand('copy');
  alert('Summary copied to clipboard!');
}

function shareToGoogleKeep() {
  const text = document.getElementById('summaryOutput').value;
  if (!text.trim()) {
    showPopup('Nothing to share', true);
    return;
  }

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const dateStr = `${yyyy}-${mm}-${dd}`;
  
  // Create the Google Keep URL with the note title and content
  const title = encodeURIComponent(`Daily Summary ${dateStr}`);
  const content = encodeURIComponent(text);
  const keepUrl = `https://keep.google.com/u/0/#create/text=${content}`;

  // Open Google Keep in a new window
  window.open(keepUrl, '_blank', 'width=800,height=600');
  showPopup('Opening Google Keep...');
}

function generate333Summary() {
  const focus = document.getElementById('threeFocus').value.trim();
  // Collect checked short tasks
  const shortChecks = Array.from(document.querySelectorAll('.short-check:checked')).map(task => task.value);
  const short = shortChecks.length ? shortChecks.map((task, i) => `${i + 1}. ${task}`).join('\n') : '-';
  // Collect checked maintenance activities
  const maintChecks = Array.from(document.querySelectorAll('.maint-check:checked')).map(task => task.value);
  const maint = maintChecks.length ? maintChecks.map((task, i) => `${i + 1}. ${task}`).join('\n') : '-';

  // Split focus into lines and number each
  let focusLines = focus.split(/\r?\n/).map(task => task.trim()).filter(Boolean);
  let focusOutput = focusLines.length ? focusLines.map((task, i) => `${i + 1}. ${task}`).join('\n') : '-';

  const text = `Most Important Tasks:\n${focusOutput}\n\nShort Tasks:\n${short}\n\nMaintenance Activities:\n${maint}`;
  document.getElementById('commitmentOutput').value = text;
}

function share333ToGoogleKeep() {
  const text = document.getElementById('commitmentOutput').value;
  if (!text.trim()) {
    showPopup('Nothing to share', true);
    return;
  }

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = `${tomorrow.getFullYear()}-${String(tomorrow.getMonth() + 1).padStart(2, '0')}-${String(tomorrow.getDate()).padStart(2, '0')}`;
  
  // Create the Google Keep URL with the note title and content
  const title = encodeURIComponent(`Commitments for ${tomorrowStr}`);
  const content = encodeURIComponent(text);
  const keepUrl = `https://keep.google.com/u/0/#create/text=${content}`;

  // Open Google Keep in a new window
  window.open(keepUrl, '_blank', 'width=800,height=600');
  showPopup('Opening Google Keep...');
}

function saveToObsidian() {
  const text = document.getElementById('summaryOutput').value;
  if (!text.trim()) {
    showPopup('Nothing to save', true);
    return;
  }

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const dateStr = `${yyyy}-${mm}-${dd}`;
  
  // Create Obsidian-compatible markdown content with frontmatter
  const frontmatter = [
    '---',
    `date: ${dateStr}`,
    'type: daily-summary',
    'tags: [daily-summary, work-log]',
    '---',
    '',
    `# ${dateStr}`,
    '',
  ].join('\n');

  const content = frontmatter + text;
  
  // Create and download the markdown file
  const blob = new Blob([content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = `${dateStr}.md`;
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
  showPopup('Markdown file saved!');
}

function save333ToObsidian() {
  const text = document.getElementById('commitmentOutput').value;
  if (!text.trim()) {
    showPopup('Nothing to save', true);
    return;
  }

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const yyyy = tomorrow.getFullYear();
  const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const dd = String(tomorrow.getDate()).padStart(2, '0');
  const dateStr = `${yyyy}-${mm}-${dd}`;
  
  // Create Obsidian-compatible markdown content with frontmatter
  const frontmatter = [
    '---',
    `date: ${dateStr}`,
    'type: daily-commitments',
    'tags: [daily-commitments, tasks, planning]',
    '---',
    '',
    `# ${dateStr}`,
    '',
  ].join('\n');

  const content = frontmatter + text;
  
  // Create and download the markdown file
  const blob = new Blob([content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = `tasks_${dateStr}.md`;
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
  showPopup('Markdown file saved!');
}
