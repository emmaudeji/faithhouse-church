export default {
  name: 'monthlyFocus',
  title: 'Monthly Prophetic Focus',
  type: 'document',

  fields: [
    {
      name: 'monthYear',
      title: 'Select Month',
      type: 'date',
      description: 'Compulsory. Choose the first date of the month.',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },

    {
      name: 'theme',
      title: 'Monthly Theme',
      type: 'string',
      description: 'What is the Month theme?',
      required: true,
    },

    {
      name: 'emphasis',
      title: 'Monthly emphasis',
      type: 'string',
      description: 'What is the Month emphasis',
      required: true,
    },

    {
      name: 'monthlyScriptures',
      title: 'Scriptures',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Enter the scriptures',
      required: true,
    },

    {
      name: 'monthlyContent',
      title: 'Content',
      description: 'Enter the content of the prophetic focus. Stylize as you want',
      type: 'array',
      of: [{type: 'block'}],
      required: true,
    },

    {
      title: 'Image',
      name: 'monthlyFocusImage',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      description: 'Will you like to add an image',
    },

    {
      name: 'editor',
      title: 'Editor',
      type: 'string',
      description: 'Who is editting this',
    },
  ],
}
