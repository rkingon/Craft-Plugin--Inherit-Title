<?php

namespace Craft;

class InheritTitleFieldType extends BaseFieldType
{
	public function getName()
	{
		return Craft::t('Inherit Title');
	}
	
	protected function defineSettings()
	{
		return array(
			'populateWith' => AttributeType::String,
			'populateSlug' => AttributeType::Number
		);
	}
	
	public function getSettingsHtml()
	{
		return craft()->templates->render('inherittitle/_fieldtype/settings', array(
			'settings' => $this->getSettings()
		));
	}

	public function getInputHtml($name, $value)
	{
		craft()->templates->includeJsResource('inherittitle/javascripts/handlebars.js');
		craft()->templates->includeJsResource('inherittitle/javascripts/inheritTitle.js');
		craft()->templates->includeJs('new ft_inheritTitle('.JsonHelper::encode($this->getSettings()["attributes"]).');');
		return craft()->templates->render('inherittitle/_fieldtype/index', array(
			'settingsJSON' => json_encode($this->getSettings()["attributes"])
		));
	}
}
