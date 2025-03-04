---
title: "Status Bar Panel"
enterprise: true
---

The Status Bar Panel allows you to add your own components to the grid's Status Bar. Use this when the provided status bar components do not meet your requirements.

<grid-example title='Status Bar Panel' name='simple-component' type='mixed' options='{ "enterprise": true, "modules": ["clientside", "statusbar", "range"] }'></grid-example>

## Implementing a Status Bar Panel Component

md-include:component-interface-javascript.md
md-include:component-interface-angular.md
md-include:component-interface-react.md
md-include:component-interface-vue.md

<framework-specific-section frameworks="javascript,angular,vue">
<interface-documentation interfaceName='IStatusPanelParams'></interface-documentation>
</framework-specific-section>
<framework-specific-section frameworks="react">
<interface-documentation interfaceName='CustomStatusPanelProps'></interface-documentation>
</framework-specific-section>

<framework-specific-section frameworks="react">
<note>If you do not enable the grid option `reactiveCustomComponents`, it is still possible to use custom status bar panels. However your status bar panel will not update with prop changes, but will instead be destroyed/recreated..</note>
</framework-specific-section>

## Configuring Status Bar Panels

In order to add new components to the Status Bar (or to configure the provided `agAggregationComponent` component) you need to provide the components and any associated information to `statusBar`:

md-include:configure-javascript.md
md-include:configure-angular.md
md-include:configure-react.md
md-include:configure-vue.md

Order is important here - the order of the components provided will determine the order in which they're rendered, from left to right.

<grid-example title='Status Bar Panel' name='custom-component' type='mixed' options='{ "enterprise": true, "modules": ["clientside", "statusbar", "range"] }'></grid-example>

## Initialisation of Status Bar Components

The status bar components will be instantiated before the grid is fully initialised - specifically they will be initialised
before any row data has been rendered.

If you have a component that you wish to work on data once it's ready (calculate the sum of a column for example) then you'll
need to hook into the `modelUpdated` event. Remember to remove the event listener when the component is destroyed. 

md-include:init-javascript.md
md-include:init-angular.md
md-include:init-react.md
md-include:init-vue.md

## Accessing Status Bar Panel Instances

After the grid has created an instance of a status bar component it is possible to access that instance. This is useful if you want to call a method that you provide on the status bar component that has nothing to do with the operation of the grid. Accessing a status bar component is done using the grid API `getStatusPanel(key)`.

<api-documentation source='grid-api/api.json' section='accessories' names='["getStatusPanel"]'></api-documentation>

<framework-specific-section frameworks="react">
|The instances returned by the grid will be wrapper components that match the provided grid status bar panel components. To get the React custom status bar panel component, the helper function `getInstance` can be used with this.
</framework-specific-section>

The example below shows using `getStatusPanel`:

<grid-example title='Get Status Bar Panel Instance' name='component-instance' type='mixed' options='{ "enterprise": true, "modules": ["clientside", "statusbar", "range"] }'></grid-example>
