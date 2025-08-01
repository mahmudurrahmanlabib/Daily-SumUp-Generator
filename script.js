function generateSummary() {
  try {
    // Get today's date in required format
    const today = new Date();
    const dateStr = today.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });

    // Get all values
    const tickets = parseInt(document.getElementById('tickets').value) || 0;
    const chats = parseInt(document.getElementById('chats').value) || 0;
    const reviews = parseInt(document.getElementById('reviews').value) || 0;
    const facebook = parseInt(document.getElementById('facebook').value) || 0;
    const github = parseInt(document.getElementById('github').value) || 0;
    const docsNew = parseInt(document.getElementById('docsNew').value) || 0;
    const docsUpdate = parseInt(document.getElementById('docsUpdate').value) || 0;
    const docsKb = parseInt(document.getElementById('docsKb').value) || 0;
    const rnd = parseInt(document.getElementById('rnd').value) || 0;
    const otfCount = parseInt(document.getElementById('otfCount').value) || 0;

    // Meeting details
    const meetingsCount = parseInt(document.getElementById('meetingsCount').value) || 0;
    let meetingsDetails = [];
    for (let i = 0; i < meetingsCount; i++) {
      const val = document.getElementById(`meeting_${i}`)?.value?.trim();
      if (val) meetingsDetails.push(val);
    }

    // Collaboration details
    const collabCount = parseInt(document.getElementById('collabCount').value) || 0;
    let collabDetails = [];
    for (let i = 0; i < collabCount; i++) {
      const withWhom = document.getElementById(`collab_with_${i}`)?.value?.trim();
      const aboutWhat = document.getElementById(`collab_about_${i}`)?.value?.trim();
      if (withWhom && aboutWhat) {
        collabDetails.push(`with ${withWhom} regarding '${aboutWhat}'`);
      }
    }

    // QA topics
    const qa = document.getElementById('qa').value;
    const qaTopics = qa.split('\n').map(line => line.trim()).filter(Boolean);

    // Get R&D topics
    let rndDetails = [];
    for (let i = 0; i < rnd; i++) {
      const title = document.getElementById(`rndLinkText_${i}`)?.value?.trim();
      if (title) rndDetails.push(title);
    }

    // Get OTF/Additional tasks
    let otfTasks = [];
    for (let i = 0; i < otfCount; i++) {
      const title = document.getElementById(`otfText_${i}`)?.value?.trim();
      if (title) otfTasks.push(title);
    }

    // Build the formatted summary
    let summaryText = `Summary of Activities –  ${dateStr}\n`;
    summaryText += `\n:inbox_tray: Tickets & Live Chats\n`;
    summaryText += `Assigned - ${tickets.toString().padStart(2, '0')}\n`;
    summaryText += `Unassigned - ${reviews.toString().padStart(2, '0')}\n`;
    summaryText += `\n:speech_balloon:  Live chats:\n`;
    summaryText += `Live chat sessions handled: ${chats.toString().padStart(2, '0')}\n`;
    summaryText += `\n:globe_with_meridians: Community & Platform Contributions\n`;
    summaryText += `Facebook: ${facebook} post/comment replied\n`;
    summaryText += `Github: ${github} Issue created\n`;
    summaryText += `\n:books: Documentation\n`;
    summaryText += `Updated documentation: ${docsUpdate} article\n`;
    summaryText += `Published knowledgebase articles: ${docsKb}\n`;
    summaryText += `\n:office_worker: Meetings\n`;
    if (meetingsDetails.length > 0) {
      summaryText += `Attended ${meetingsDetails.length} meeting${meetingsDetails.length > 1 ? 's' : ''}:\n`;
      meetingsDetails.forEach(meeting => {
        summaryText += `${meeting}\n`;
      });
    }
    summaryText += `\n:handshake: Collaboration\n`;
    if (collabDetails.length > 0) {
      collabDetails.forEach(collab => {
        summaryText += `${collab}\n`;
      });
    }
    summaryText += `\n :test_tube: QA / R&D / Technical Validation\n`;
    if (qaTopics.length > 0) {
      summaryText += `QA Conducted on ${qaTopics.length} feature${qaTopics.length > 1 ? 's' : ''}:\n`;
      qaTopics.forEach(topic => {
        summaryText += `${topic}\n`;
      });
    }
    if (rndDetails.length > 0) {
      summaryText += `R&D for ${rndDetails.join(', ')}\n`;
    }
    summaryText += `\n:bar_chart: Other Tasks\n`;
    if (otfTasks.length > 0) {
      otfTasks.forEach(task => {
        summaryText += `${task}\n`;
      });
    }
    // Next day plans (plain, not 3-part)
    const tomorrowCommitments = [];
    const focus = document.getElementById('threeFocus')?.value.trim();
    if (focus) tomorrowCommitments.push(focus);
    const manualShort = document.getElementById('manualShortTasks')?.value.trim().split(/\n|\r/).map(v => v.trim()).filter(Boolean) || [];
    tomorrowCommitments.push(...manualShort);
    const shortChecks = Array.from(document.querySelectorAll('.short-check:checked')).map(cb => cb.value);
    tomorrowCommitments.push(...shortChecks);
    const manualMaint = document.getElementById('manualMaintTasks')?.value.trim().split(/\n|\r/).map(v => v.trim()).filter(Boolean) || [];
    tomorrowCommitments.push(...manualMaint);
    const maintChecks = Array.from(document.querySelectorAll('.maint-check:checked')).map(cb => cb.value);
    tomorrowCommitments.push(...maintChecks);
    const tomorrowChecks = Array.from(document.querySelectorAll('.tomorrow-check:checked')).map(cb => cb.value);
    const tomorrowPlansText = document.getElementById('tomorrowPlans').value.trim();
    let tomorrowList = [];
    if (tomorrowChecks.length) tomorrowList = tomorrowList.concat(tomorrowChecks);
    if (tomorrowPlansText) tomorrowList = tomorrowList.concat(tomorrowPlansText.split(/\n|\r/).map(v => v.trim()).filter(Boolean));
    if (tomorrowList.length) {
      summaryText += `On the next working day, I have plans to:\n${tomorrowList.map(v => `- ${v}`).join('\n')}`;
    }
    document.getElementById('summaryOutput').value = summaryText.trim();
  } catch (error) {
    console.error('Error generating summary:', error);
    document.getElementById('summaryOutput').value = 'Error generating summary. Please check the console for details.';
  }
}

function clearSummaryOutput() {
  document.getElementById('summaryOutput').value = '';
}

function copySummary() {
  const output = document.getElementById('summaryOutput');
  if (!output.value.trim()) {
    alert('Nothing to copy');
    return;
  }
  output.select();
  document.execCommand('copy');
}
