export default {
  name: 'testimonySchema',
  title: 'Testimony',
  type: 'document',

  fields: [
    {
      name: 'testifier',
      title: 'Testifier',
      type: 'string',
      description: 'Name of testifier',
      required: true,
    },
    {
      name: 'editor',
      title: 'Editor',
      type: 'string',
      description: 'Who is editting this',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'testifier',
        maxLength: 90,
      },
    },

    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Give this testimony a title',
      required: true,
    },

    {
      name: 'testimony',
      title: 'Testimony',
      description: 'Enter the testimony',
      type: 'array',
      of: [{type: 'block'}],
      required: true,
    },

    {
      name: 'highlight',
      title: 'Highlight',
      type: 'string',
      description: 'Specify any part of the testimony to highlight on display',
    },

    {
      title: 'Select Category',
      description: 'Which best describes the testimony',
      name: 'category',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Healing', value: 'Healing'},
          {title: 'Business Breakthrough', value: 'Business Breakthrough'},
          {title: 'Deliverance', value: 'Deliverance'},
          {title: 'Success', value: 'Success'},
          {title: 'Transformation', value: 'Transformation'},
          {title: 'Financial Favour', value: 'Financial Favour'},
        ],
      },
    },

    {
      title: 'Other Category',
      description: 'You can enter any other type of testimony category here',
      name: 'other_category',
      type: 'array',
      of: [{type: 'string'}],
    },

    {
      name: 'dateTestified',
      title: 'Date Testified',
      type: 'date',
      description: 'Date testimony was shared',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },

    {
      name: 'endDate',
      title: 'Stop showing',
      type: 'date',
      description: 'Date to stop showing testimony on the website',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },

    {
      title: 'Testifier Image',
      name: 'testifierImage',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      description: 'Upload testifier image if any',
    },
  ],
}
