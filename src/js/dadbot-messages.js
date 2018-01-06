$(function() {
  $('.phone')
    // Initialize the plugin
    .fbMessenger({
      // options go here
    })
    // Schedule some interaction:
    .fbMessenger('start', { delay: 2000 })
    .fbMessenger('message', 'user', 'Get started', { delay: 250 })
    .fbMessenger('typingIndicator', { delay: 250 })
    .fbMessenger('message', 'bot', 'Hi there! Pleased to meet you! Im DadBot, how about a joke?', { delay: 1500 })
    .fbMessenger('showQuickReplies', [ 'Yes please','No thanks' ], { delay: 2000 })
    .fbMessenger('selectQuickReply', 0, { delay: 1000 })
    .fbMessenger('message', 'bot', 'Coming up!', { delay: 1000 })
    .fbMessenger('typingIndicator', { delay: 250 })
    .fbMessenger('message', 'bot', 'I used to work for a soft drink can crusher. It was soda pressing.', { delay: 1000 })
    .fbMessenger('message', 'bot', 'Fancy another one?', { delay: 2000 })
    .fbMessenger('showQuickReplies', [ 'Defo!','No thanks' ], { delay: 2000 })
    .fbMessenger('selectQuickReply', 0, { delay: 2000 })
    .fbMessenger('typingIndicator', { delay: 250 })
    .fbMessenger('message', 'bot', 'What do you call a group of killer whales playing instruments? An Orca-stra.', { delay: 1000 })
    .fbMessenger('typingIndicator', { delay: 250 })
    .fbMessenger('message', 'bot', 'Another one?', { delay: 1000 })
    .fbMessenger('showQuickReplies', [ 'Definately','No right now' ], { delay: 2000 })
    .fbMessenger('selectQuickReply', 0, { delay: 2000 })
    .fbMessenger('typingIndicator', { delay: 250 })
    .fbMessenger('message', 'bot', 'One of my personal favorites...', { delay: 1000 })
    .fbMessenger('typingIndicator', { delay: 250 })
    .fbMessenger('message', 'bot', 'What time did the man go to the dentist?... Tooth hurt-y.', { delay: 1000 })
    .fbMessenger('typingIndicator', { delay: 250 })
	.fbMessenger('message', 'bot', 'Good one yeah? Want more?', { delay: 1000 })
	.fbMessenger('showQuickReplies', [ 'Yes','No thanks' ], { delay: 2000 })
    .fbMessenger('selectQuickReply', 1, { delay: 2000 })
    .fbMessenger('message', 'bot', 'So soon? Well its been fun! Be sure to come back anytime.', { delay: 3000 })

    
    // And trigger the execution
    .fbMessenger('run');
  });