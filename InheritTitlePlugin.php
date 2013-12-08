<?php

namespace Craft;

class InheritTitlePlugin extends BasePlugin
{
    public function getName()
    {
        return Craft::t('Inherit Title');
    }

    public function getVersion()
    {
        return '1.0';
    }

    public function getDeveloper()
    {
        return 'Roi Kingon';
    }

    public function getDeveloperUrl()
    {
        return 'http://www.roikingon.com';
    }

    public function hasCpSection()
    {
        return false;
    }
}
