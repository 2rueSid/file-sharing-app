import React from 'react';
import Settings from './SettingsView';
export default { title: 'settings' };

export const SettingsPanelWithActiveButton = () => {
  return (
    <Settings
      fileDetails={{ title: 'document', extension: '.js' }}
      isChecked={true}
      setCheck={() => 'checked'}
    />
  );
};

export const SettingsPanelWithDisabledButton = () => {
  return (
    <Settings
      fileDetails={{ title: 'document', extension: '.js' }}
      isChecked={false}
      setCheck={() => 'checked'}
    />
  );
};

export const SettingsPanelWithActiveFileDetails = () => {
  return (
    <Settings
      fileDetails={{ title: 'document', extension: '.js' }}
      isChecked={true}
      setCheck={() => 'checked'}
    />
  );
};

export const SettingsPanelWithoutActiveFileDetails = () => {
  return <Settings fileDetails={{}} isChecked={false} setCheck={() => 'checked'} />;
};
