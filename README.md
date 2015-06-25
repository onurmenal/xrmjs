#About
This library was created to simplify the JavaScript customizations on Microsoft Dynamics CRM forms. 

The methods and selectors are very similar to jQuery and use fully supported methods to achieve their purposes .The selector vary according to the control type(standart,lookup ,optionset,section,iframe,tab).xrmJS selector is "_". 

This library also includes an intellisense file to provide intellisense support on Visual Studio .


#A few examples
* Hide text control `_("f:new_fieldname").hide` or `_("field:fieldname").hide()`
* Get text control value `_("f:new_fieldname").val()` or set  value `_("f:new_fieldname").val("hi!")`
* Hide lookup control  `_("l:new_lookup").hide()` or `_("lookup:new_lookup").hide()`
* Set lookup value `_("l:new_lookup").val({entityType:"Account", name:"John Doe", id:"0000-0000"})`

####documentation : http://www.onurmenal.com/xrmjs/

