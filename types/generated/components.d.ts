import type { Schema, Attribute } from '@strapi/strapi';

export interface CardItemFieldsCardItemWorkList extends Schema.Component {
  collectionName: 'components_card_item_fields_card_item_work_lists';
  info: {
    displayName: 'cardItem_workList';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    cardItem_workListItem: Attribute.String;
  };
}

export interface ValueCardItemComponent extends Schema.Component {
  collectionName: 'components_value_card_item_components';
  info: {
    displayName: 'cardItem_component';
    icon: 'briefcase';
  };
  attributes: {
    list: Attribute.Enumeration<['some']>;
  };
}

export interface ValueCardItemWorkListItems extends Schema.Component {
  collectionName: 'components_value_card_item_work_list_items';
  info: {
    displayName: 'cardItem_workListItems';
    icon: 'bulletList';
  };
  attributes: {
    cardItem_worksListItem: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'card-item-fields.card-item-work-list': CardItemFieldsCardItemWorkList;
      'value.card-item-component': ValueCardItemComponent;
      'value.card-item-work-list-items': ValueCardItemWorkListItems;
    }
  }
}
