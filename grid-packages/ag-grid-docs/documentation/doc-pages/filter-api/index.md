---
title: "Filter API"
---

You can access and set the models for filters through the grid API, or access individual filter instances directly for more control. This page details how to do both.

## Get / Set All Filter Models

It is possible to get the state of all filters using the grid API method `getFilterModel()`, and to set the state using
`setFilterModel()`. These methods manage the filters states via the `getModel()` and `setModel()` methods of the
individual filters.

<api-documentation source='grid-api/api.json' section='filter' names='["getFilterModel", "setFilterModel"]'></api-documentation>

<snippet>
|// Gets filter model via the grid API
|const model = api.getFilterModel();
| 
|// Sets the filter model via the grid API
|api.setFilterModel(model);
</snippet>

The filter model represents the state of filters for all columns and has the following structure:

```js
// Sample filter model via getFilterModel()
{
    athlete: {
        filterType: 'text',
        type: 'startsWith',
        filter: 'mich'
    },
    age: {
        filterType: 'number',
        type: 'lessThan',
        filter: 30
    }
}
```

This is useful if you want to save the global filter state and apply it at a later stage. It is also useful for server-side filtering, where you want to pass the filter state to the server.

### Reset All Filters

You can reset all filters by doing the following:

<snippet>
api.setFilterModel(null);
</snippet>

### Example: Get / Set All Filter Models

The example below shows getting and setting all the filter models in action.

- `Save Filter Model` saves the current filter state, which will then be displayed.
- `Restore Saved Filter Model` restores the saved filter state back into the grid.
- `Set Custom Filter Model` takes a custom hard-coded filter model and applies it to the grid.
- `Reset Filters` will clear all active filters.
- `Destroy Filter` destroys the filter for the **Athlete** column by calling `gridApi.destroyFilter('athlete')`. This removes any active filter from that column, and will cause the filter to be created with new initialisation values the next time it is interacted with.

(Note: the example uses the Enterprise-only [Set Filter](/filter-set/)).

<grid-example title='Filter Model' name='filter-model' type='generated' options='{ "enterprise": true, "exampleHeight": 587, "modules": ["clientside", "menu", "filterpanel", "columnpanel", "setfilter"] }'></grid-example>

## Get / Set Individual Filter Model

It is also possible to get or set the filter model for a specific filter, including your own custom filters.

<api-documentation source='grid-api/api.json' section='filter' names='["getColumnFilterModel", "setColumnFilterModel"]'></api-documentation>

### Re-running Grid Filtering

After filters have been changed via their API, you must ensure the method `gridApi.onFilterChanged()` is called to tell the grid to filter the rows again. If `gridApi.onFilterChanged()` is not called, the grid will still show the data relevant to the filters before they were updated through the API.

<snippet transform="false">
|// Set a filter model
|await api.setColumnFilterModel('name', {
|    filterType: 'text',
|    type: 'startsWith',
|    filter: 'abc',
|});
|
|// Tell grid to run filter operation again
|api.onFilterChanged();
</snippet>

### Reset Individual Filters

You can reset a filter to its original state by setting the model to `null`.

<snippet transform="false">
|// Set the model to null
|await api.setColumnFilterModel('name', null);
| 
|// Tell grid to run filter operation again
|api.onFilterChanged();
</snippet>

### Example: Get / Set Individual Filter Model

The example below shows getting and setting an individual filter model in action.

- `Save Filter Model` saves the **Athlete** filter state, which will then be displayed.
- `Restore Saved Filter Model` restores the saved **Athlete** filter state back into the grid.
- `Set Custom Filter Model` takes a custom hard-coded **Athlete** filter model and applies it to the grid.
- `Reset Filter` will clear the **Athlete** filter.

<grid-example title='Individual Filter Model' name='filter-model-individual' type='generated' options='{ "enterprise": true, "exampleHeight": 587, "modules": ["clientside", "menu", "filterpanel", "columnpanel", "setfilter"] }'></grid-example>

## Accessing Individual Filter Component Instances

It is also possible to access the filter components directly if you want to interact with a specific filter. This also works for your own custom filters, where you can get a reference to the underlying filtering instance (i.e. what was created when AG Grid called `new` on your filter). Calling `api.getColumnFilterInstance(colKey)` will return a reference to the filter instance for the column with key `colKey`.

<api-documentation source='grid-api/api.json' section='filter' names='["getColumnFilterInstance"]'></api-documentation>

<snippet transform="false">
// Get a reference to the 'name' filter instance
const filterInstance = await api.getColumnFilterInstance('name');
</snippet>

All of the methods of the filter are available on the instance. If using a custom filter, any other methods you have added will also be present, allowing bespoke behaviour to be added to your filter. Both provided and custom filters implement `IFilter` and have the following common methods:

<interface-documentation interfaceName='IFilter' names='["isFilterActive", "getModel", "setModel"]' config='{"description":""}'></interface-documentation>

Note that if you call `setModel` on the filter, you will also need to call `onFilterChanged` to re-run filtering, similar to [Re-running Grid Filtering](/filter-api/#re-running-grid-filtering)

### Example: Accessing Individual Filters

The example below shows how you can interact with an individual filter instance, using the Set Filter as an example.

- `Get Mini Filter Text` will print the text from the Set Filter's Mini Filter to the console.
- `Save Mini Filter Text` will save the Mini Filter text.
- `Restore Mini Filter Text` will restore the Mini Filter text from the saved state.

(Note: the example uses the Enterprise-only [Set Filter](/filter-set/)).

<grid-example title='Accessing Individual Filters' name='filter-api' type='generated' options='{ "enterprise": true, "exampleHeight": 624, "modules": ["clientside", "setfilter", "menu", "columnpanel", "filterpanel"] }'></grid-example>

## Read-only Filter UI

Sometimes it maybe useful to strictly control the filters used by the grid via API, whilst still exposing filter settings in-use to users. The `readOnly` filter parameter changes the behaviour of all provided column filters so their UI is read-only. In this mode, API filter changes are still honoured and reflected in the UI:

<snippet>
const gridOptions = {
    columnDefs: [
        {
            field: 'age',
            filter: true,
            filterParams: {
                readOnly: true
            }
        }
    ]
}
</snippet>

The following example demonstrates all of the Provided Filters with `readOnly: true` enabled:
- Simple Filters have a read-only display with no buttons; if there is no 2nd condition set then the join operator and 2nd condition are hidden:
    - `athlete` column demonstrates [Text Filter](/filter-text/).
    - `age` and `year` columns demonstrate [Number Filter](/filter-number/).
    - `date` column demonstrates [Date Filter](/filter-date/).
- [Set Filter](/filter-set/) allows Mini Filter searching of values, but value inclusion/exclusion cannot be toggled; buttons are also hidden, and pressing enter in the Mini Filter input has no effect:
    - `country`, `gold`, `silver` and `bronze` columns demonstrate [Set Filter](/filter-set/).
- [Multi Filter](/filter-multi/) has no direct behaviour change, sub-filters need to be individually made read-only. `readOnly: true` is needed to affect any associated [Floating Filters](/floating-filters/).
    - `sport` column demonstrates [Multi Filter](/filter-multi/).
- [Floating Filters](/floating-filters/) are enabled and inherit `readOnly: true` from their parent, disabling any UI input.
- Buttons above the grid provide API interactions to configure the filters.

<grid-example title='Read-only Filter UI' name='filter-api-readonly' type='generated' options='{ "enterprise": true, "exampleHeight": 624, "modules": ["clientside", "setfilter", "menu", "columnpanel", "multifilter"] }'></grid-example>

## Launching Filters

How filters are launched can be customised if grid option `columnMenu = 'new'`.

`colDef.suppressHeaderFilter = true` can be used to disable the button in the header that opens the filter.

The filter can also be launched via `api.showColumnFilter(columnKey)`.

The following example demonstrates launching the filter:
- The **Athlete** column has a filter button in the header to launch the filter.
- The **Age** column has a floating filter, so the header button is automatically hidden.
- The **Country** column has the filter button hidden via `colDef.suppressHeaderFilter`. The filter can still be opened via the API by clicking the `Open Country Filter` button.
- The **Year** column has a floating filter and the header button is also suppressed, so has a slightly different display style when the filter is active.

<grid-example title='Launching Filters' name='launching-filters' type='generated' options='{ "modules": ["clientside"] }'></grid-example>

## Filter Events

Filtering causes the following events to be emitted:

<api-documentation source='grid-events/events.json' section='filter' names='["filterOpened", "filterChanged", "filterModified"]'></api-documentation>

## Next Up

Continue to the next section to learn about [Floating Filters](/floating-filters/).
