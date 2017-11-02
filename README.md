# About
This library was created to simplify the JavaScript customizations on Microsoft Dynamics CRM forms. 

The methods and selectors are very similar to jQuery and use fully supported methods to achieve their purposes. The query selector varies according to the control type (i.e. standart, lookup, optionset, section, iframe or tab). The xrmJS selector is `_`. 

This library also includes an intellisense file to provide intellisense support on Visual Studio.

# A few examples

* Hide text control `_("f:new_fieldname").hide()` or `_("field:fieldname").hide()`
* Get text control value `_("f:new_fieldname").val()` or set  value `_("f:new_fieldname").val("hi!")`
* Hide lookup control  `_("l:new_lookup").hide()` or `_("lookup:new_lookup").hide()`
* Set lookup value `_("l:new_lookup").val({entityType:"Account", name:"John Doe", id:"0000-0000"})`

## Control Independent Operation Samples

  *  Clean the braces from the guid : `_.cleanBraces("{0000-0000}");`
  *  Get Xrm page context : `_.context()();`
  *  Get current entity name :  _.entityName();
  *  Get current record id : `_.recordId();`
  *  Get form type : `_.formType();`
  *  Get control : `_.getControl("new_name");`
  *  Get form controls  : `_.formControls();`
  *  Get logged user id : `_.userId();`
  *  Get client url : `_.clientUrl();`
  *  Get server url : `_.serverUrl();`
  *  Get soap url : `_.soapUrl();`
  *  Get web service url : `_.serviceUrl();`
  *  Get organization name : `_.orgName();`
  *  Compare two guids : `_.compareGuids("0000-0000","0000-0000");`
  *  Check null : isNull(value);
  *  Check null or empty : isNullOrEmpty(value);

## Field Operation Samples

  *  Get the field control as default : `_("f:new_field").control();`
  *  Clear the field value : `_("f:new_field").clear();`
  *  Hide the field : `_("f:new_field").hide();`
  *  Show the field: `_("f:new_field").show();`
  *  Change visibility of field as true/false : `_("f:new_field").visible(false);`
  *  Set disable the field : `_("f:new_field").disable();`
  *  Set enable the field  : `_("f:new_field").enable();`
  *  Change disable/enable status of field as true/false: `_("f:new_field").setDisable(true);`
  *  Get enable/disable status of field: `_("f:new_field").isEnable();`
  *  Set required level the field as required: `_("f:new_field").required() or _("f:new_field").required(true);`
  *  Set required level the field as unrequired: `_("f:new_field").required(false);`
  *  Get required level of field: `_("f:new_field").isRequired();`
  *  Set required level the field as recomend: `_("f:new_field").recomend();`
  *  Get label the field : `_("f:new_field").label();`
  *  Set label the field : `_("f:new_field");.label("new label text");`
  *  Get value the field : `_("f:new_field").val()`
  *  Set value the field : `_("f:new_field").val("new value");`

## Lookup Operation Samples

  *  Get the lookup control as default : `_("l:new_lookup").control();`
  *  Clear the lookup value : `_("l:new_lookup").clear();`
  *  Hide the lookup : `_("l:new_lookup").hide();`
  *  Show the lookup: `_("l:new_lookup").show();`
  *  Change visibility of lookup as true/false : `_("l:new_lookup").visible(false);`
  *  Set disable the lookup : `_("l:new_lookup").disable();`
  *  Set enable the lookup  : `_("l:new_lookup").enable();`
  *  Change disable/enable status of lookup as true/false: `_("l:new_lookup").setDisable(true);`
  *  Get enable/disable status of lookup: `_("l:new_lookup").isEnable();`
  *  Set required level the lookup as required: `_("l:new_lookup").required() or _("l:new_lookup").required(true);`
  *  Set required level the lookup as unrequired: `_("l:new_lookup").required(false);`
  *  Get required level of lookup: `_("l:new_lookup").isRequired();`
  *  Set required level the lookup as recomend: `_("l:new_lookup").recomend();`
  *  Get label the lookup : `_("l:new_lookup").label();`
  *  Set label the lookup : `_("l:new_lookup");.label("new label text");`
  *  Get value the lookup : `_("l:new_lookup").val()`
  *  Set value the lookup : `_("l:new_lookup").val({entityType:"Account" , name:"John Doe" , id:"0000-0000"});`

## Optionset Operation Samples

  *  Get the optionset control as default : `_("o:new_optionset").control();`
  *  Clear the optionset value : `_("o:new_optionset").clear();`
  *  Hide the optionset : `_("o:new_optionset").hide();`
  *  Show the optionset: `_("o:new_optionset").show();`
  *  Change visibility of optionset as true/false : `_("o:new_optionset").visible(false);`
  *  Set disable the optionset : `_("o:new_optionset").disable();`
  *  Set enable the optionset  : `_("o:new_optionset").enable();`
  *  Change disable/enable status of optionset as true/false: `_("o:new_optionset").setDisable(true);`
  *  Get enable/disable status of optionset: `_("o:new_optionset").isEnable();`
  *  Set required level the optionset as required: `_("o:new_optionset").required() or _("o:new_optionset").required(true);`
  *  Set required level the optionset as unrequired: `_("o:new_optionset").required(false);`
  *  Get required level of optionset: `_("o:new_optionset").isRequired();`
  *  Set required level the optionset as recomend: `_("o:new_optionset").recomend();`
  *  Get label the optionset : `_("o:new_optionset").label();`
  *  Set label the optionset : `_("o:new_optionset");.label("new label text");`
  *  Add option to optionset : `_("o:new_optionset").addOption({text:"New Option" , value:1},1);`
  *  Remove option from optionset : `_("o:new_optionset").removeOption(1);`
  *  Get options labels : `_("o:new_optionset").labels();`
  *  Get options values : `_("o:new_optionset").values();`
  *  Get selected option : `_("o:new_optionset").selected();`
  *  Get option from opitonset : `_("o:new_optionset").getOption(1);`
  *  Get all options : `_("o_new_optionset").options();`

## IFrame Operation Samples

  *  Get the iframe control as default : `_("i:IFRAME_name").control();`
  *  Clear the iframe url : `_("i:IFRAME_name").clear();`
  *  Hide the iframe : `_("i:IFRAME_name").hide();`
  *  Show the iframe: `_("i:IFRAME_name").show();`
  *  Set the iframe url: `_("i:IFRAME_name").url("http://www.google.com");`
  *  Get the iframe url: `_("i:IFRAME_name").url();`
  *  Refresh the iframe: `_("i:IFRAME_name").refresh();`
  *  Get initial url: `_("i:IFRAME_name").initialUrl();`

## Tab Operation Samples

  *  Get the tab control as default : `_("t:TAB_name").control();`
  *  Get the tab sections : `_("t:TAB_name").sections();`
  *  Hide the tab : `_("t:TAB_name").hide();`
  *  Show the tab: `_("t:TAB_name").show();`
  *  Expand the tab: `_("t:TAB_name").expand();`
  *  Collapse the tab: `_("t:TAB_name").collapse();`
  *  Get the tab label: `_("t:TAB_name").label();`
  *  Set the tab label: `_("t:TAB_name").label("new label");`
