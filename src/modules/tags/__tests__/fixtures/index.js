import uuid from 'uuid';

export default {
  getTag() {
    return {
      id: uuid(),
      name: 'tag1',
    };
  },

  getTagsResponse() {
    const tag1 = this.getTag();
    const tag2 = this.getTag();

    return {
      data: [
        {
          type: 'tags',
          id: tag1.id,
          attributes: { name: tag1.name },
        },
        {
          type: 'tags',
          id: tag2.id,
          attributes: { name: tag2.name },
        },
      ],
    };
  },
};
