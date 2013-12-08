# Inherit Title for Craft

Hides the title field and populates it with a combination of one or more custom fields. Slug population optional.

## Instructions

* Create field, using Inherit Title fieldtype
* Using handlebars syntax with shared fieldname variables configure the "Populate With" setting
* Add field to the field layout where you want to auto populate the title

## Use Case
Say you have a "firstName" and "lastName" field, and you would like the Title to auto populate with "firstName lastName" you could use: "{{firstName}} {{lastName}}" as your settings configuration.