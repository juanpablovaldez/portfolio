import type { Schema, Struct } from '@strapi/strapi';

export interface SharedSkillItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_skill_items';
  info: {
    description: 'Soft skill name';
    displayName: 'Skill Item';
    icon: 'star';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTechnology extends Struct.ComponentSchema {
  collectionName: 'components_shared_technologies';
  info: {
    description: 'Technology or skill name';
    displayName: 'Technology';
    icon: 'code';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTextItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_items';
  info: {
    description: 'Repeatable text items for features, achievements, descriptions';
    displayName: 'Text Item';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.skill-item': SharedSkillItem;
      'shared.technology': SharedTechnology;
      'shared.text-item': SharedTextItem;
    }
  }
}
