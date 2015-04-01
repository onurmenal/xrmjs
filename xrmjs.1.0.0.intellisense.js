(function () {
    // xrmJS
    var _ = function (selector) {
        
        var selectors = selector.split(":"); 

        this.type = selectors[0];
        this.object = selectors[1];

        if (this.type == "field" || this.type == "f") {
            return new _field(this.object);
        } else if (this.type == "lookup" || this.type == "l") {
            return new _lookup(this.object);
        } else if (this.type == "optionset" || this.type == "o") {
            return new _optionset(this.object);
        } else if (this.type == "iframe" || this.type == "i") {
            return new _iframe(this.object);
        } else if (this.type == "section" || this.type == "s") {
            return new _section(this.object);
        } else if (this.type =="t" ||this.type=="tab") {
            return new _tab(this.object);
        }
    };

    /* Assign  _  object to global window object.*/
    if (!window._) {
        window._ = _;
    }

  

     /*Constants*/

         _.context = Xrm.Page.context;

         _.entityName = function () {
             ///<summary>Returns the current entity logical name.</summary>
             return Xrm.Page.data.entity.getEntityName();
         }

         _.recordId = function () {
             ///<summary>Returns the current record id.</summary>
             return Xrm.Page.data.entity.getId();
         }

         _.formType = function () {
             ///<summary>Returns form type .</summary>
             return Xrm.Page.ui.getFormType();
         }

         _.userId = function () {
             ///<summary>Returns logged user id.</summary>
             return _.context.getUserId();
         }

         _.clientUrl = function () {

             return _context.getClientUrl();

         }
    
        _.serverUrl = function () {
             /// <summary>Get server url.for CRM 2011 and CRM 2013</summary>

            var clientUrl = _.clientUrl();
            var orgName = _.orgName();

            return clientUrl.replace(orgName,"");

         }

         _.orgName = function () {
             ///<summary>Returns organization name.</summary>
             return _.context.getOrgUniqueName();
         }

    /*#Constants*/





     /*OrganizationData Methods*/

         //_.retrieveData = function (entity , fields, criteria) {
            
         //    var serverUrl = _.serverUrl();
         //    var ODATA_ENDPOINT = "/XRMServices/2011/OrganizationData.svc";
         //    var Odata = serverUrl + ODATA_ENDPOINT + "/" + oQuery;


         //    var retrieveReq = new XMLHttpRequest();

         //    retrieveReq.open("GET", Odata, false);
         //    retrieveReq.setRequestHeader("Accept", "application/json");
         //    retrieveReq.setRequestHeader("Content-Type", "application/json; charset=utf-8");
         //    //retrieveReq.onreadystatechange = function() { RetrieveReqCallBack(this); };
         //    retrieveReq.send();

         //    if(retrieveReq.readyState == 4)
         //    {
         //        var retrieved = JSON.parse(retrieveReq.responseText);
         //        return retrieved.d.results;
         //    }

         //}

     /*#OrganizationData Methods*/



    /*Common Methods*/

         var common = {

             clear: function () {
                 /// <summary>Clear the field value .</summary>
                 return this.xControl.getAttribute().setValue(null);
             },

             hide: function () {
                 /// <summary>Hide the form object. </summary>
                 return this.xControl.setVisible(false);
             },

             show: function () {
                 /// <summary>Show  the form object. </summary>
                 return this.xControl.setVisible(true);
             },

             visible: function (bool) {
                 ///<summary>Set control visibilty as true or false</summary>
                 ///<param name="bool" type="boolean" optional="false">True if the control is show, otherwise false.</param>
                 return this.xControl.setVisible(bool);
             },

             disabled: function () {
                 /// <summary> Set disable  the form field.</summary>
                 return this.xControl.setDisabled(true);
             },

             enabled: function () {
                 /// <summary>Set enable  the form field. </summary>
                 return this.xControl.setDisabled(false);
             },

             setDisabled : function (bool) {
                 ///<summary>Set control disable/enable status as true or false</summary>
                 ///<param name="bool" type="boolean" optional="false">True if the control is disabled, otherwise false.</param>
                 return this.xControl.setDisabled(bool);
             },

             isEnable: function () {
                 /// <summary>Get  field enable/disable status.True if the field is enabled, otherwise false. </summary>
                 var status = this.xControl.getDisabled();
                 return !status;
             },

             required: function (bool) {
                 /// <summary>Set  the field required level. if the field required , otherwise false.</summary>
                 /// <param name="bool" type="string" optional="true">True/False.Parameter is optinal.Default value true</param>

                 if (bool == true) {
                     return 
                 } else if (bool == false) {
                     return this.xControl.getAttribute().setRequiredLevel("none");
                 } else if (bool == null || bool == "") {
                     return this.xControl.getAttribute().setRequiredLevel("required");
                 } else {
                     return null;
                 }
             },

             label: function (text) {
                 /// <summary>Get or set  form object label .</summary>
                 /// <param name="text" type="string" optional="true">Optional.If you want change label ,  assing value .</param>
                 if (text) {
                     return this.xControl.setLabel(text);
                 } else {
                     return this.xControl.getLabel();
                 }
             }
         }


         function addCommonMethods(library) {

             library.prototype.hide = common.hide;

             library.prototype.show = common.show;

             library.prototype.visible = common.visible;

             library.prototype.disabled = common.disabled;

             library.prototype.enabled = common.enabled;

             library.prototype.setDisabled = common.setDisabled;

             library.prototype.isEnable = common.isEnable;

             library.prototype.required = common.required;

             library.prototype.label = common.label;

         }

    /*#Common Methods*/


    

    /* Extend field(single line ,multiple line , number ,  datetime) library */

    var _field = function (field) {

        this.xControl = Xrm.Page.getControl(field);
        addCommonMethods(_field);
        return this;
    }

            _field.prototype.clear = common.clear;

            _field.prototype.val = function (data) {
                /// <summary>Get or set field(single line ,multiple line , number ,  datetime) value. </summary>
                /// <param name="data" type="string" optional="true">Optional.If you want change field value , assign new value to parameter.</param>
                /// <returns>Field value or field updated result.</returns>
                if (data) {
                    return this.xControl.getAttribute().setValue(data);
                } else {
                    return this.xControl.getAttribute().getValue();
                }
            };

    /* #Extend field(single line ,multiple line , number ,  datetime) library */

    

    /* Extend lookup library */

    var _lookup = function (field) {
        this.xControl = Xrm.Page.getControl(field);
        addCommonMethods(_lookup);
        return this;
    }

            _lookup.prototype.clear = common.clear;

            _lookup.prototype.val = function (data) {
                /// <summary>Get or set lookup field value as  entityType , id , name </summary>
                /// <param name="data" type="array" optional="true">Optional.<br/>If you want set a new value , assign the parameter value like this :{entityType:"Account",name:"asdas",id:"0000-0000"}</param>
                /// <returns type="array">Field value or field updated result</returns>
                debugger;
                if (data) {
                    //set  new value to lookup
                    var lookupValue = new Array();
                    lookupValue[0] = data;
                    return this.xControl.getAttribute().setValue(lookupValue);
                } else {
                    // return lookup field value
                    var lookupField = this.xControl.getAttribute().getValue();
                    if (lookupField) {
                        lookupField = lookupField[0];
                        return ({ entityName: lookupField.entityType, id: lookupField.id, name: lookupField.name });
                    } else {
                        return null;
                    }
                }
            };


    /* #Extend lookup library */

    

    /*Extend optionset library*/

    var _optionset = function (field) {
        this.xControl = Xrm.Page.getControl(field);
        addCommonMethods(_optionset);
        return this;
    }

            _optionset.prototype.selected = function () {
                /// <summary>Get selected option as array.</summary>
                /// <returns type="array">The result is like that , {text:"*",value:"*"}</returns>
                var selectedOption = this.xControl.getAttribute();
                return {
                    text: selectedOption.getText(),
                    value: selectedOption.getValue()
                };
            };

            _optionset.prototype.clear = function () {
                /// <summary>Clear all options.</summary>
                return this.xControl.clearOptions();
            };

            _optionset.prototype.options = function () {
                /// <summary>Get all options.</summary>
                var result = [];
                var options = this.xControl.getAttribute().getOptions();
                for (var i in options) {
                    if (options[i].value != "null") result.push({ text: options[i].text, value: options[i].value });
                }

                return result;
            };

            _optionset.prototype.labels = function () {
                /// <summary>Get option set labels. </summary>
                var labels = [];
                var options = this.options();
                for (var i in options) {
                    if (options[i].text != "null") labels.push(options[i].text);
                }

                return labels;
            };

            _optionset.prototype.values = function () {
                /// <summary>Get option set values. </summary>
                var values = [];
                var options = this.options();
                for (var i in options) {
                    if (options[i].value != "null") values.push(options[i].value);
                }

                return values;
            };

            _optionset.prototype.addOption = function (option, index) {
                /// <summary>Get selected option as array.Index parameter is optional</summary>
                /// <param name="option" type="array" optional="false">Added option  as that ; {text:"*" , value:"*"}</param>
                /// <param name="index" type="int" optional="true">(Optional) The index position to place the new option in. If not provided, the option will be added to the end.</param>
                return this.xControl.addOption(option, index);
            };

            _optionset.prototype.removeOption = function (index) {
                /// <summary>Removes an option from the option set control.</summary>
                /// <param name="index" type="int" optional="false">Option number</param>
                return this.xControl.removeOption(index);
            };

            _optionset.prototype.getOption = function (value) {
                /// <summary>Returns an option object with  text and value properties.</summary>
                /// <param name="value" type="string/int" optional="false">String or Number value</param>
                var option = this.xControl.getAttribute().getOption(value);
                return { text: option.text, value: option.value };
            }

    /*#Extend optionset library*/

    

    /*Extend iframe library*/

    var  _iframe = function (iframeName) {
        this.xControl = Xrm.Page.getControl(iframeName);
        return this;
    }

            _iframe.prototype.hide = common.hide;

            _iframe.prototype.show = common.show;

            _iframe.prototype.url = function (url) {
                /// <summary>Get or set iframe url.If you want set url assign value to parameter.</summary>
                /// <param name="url" type="string" optional="true">Optional.Iframe Url</param>
                if (url) {
                    return this.xControl.setSrc(url);
                } else {
                    return this.xControl.getSrc();
                }
            };

            _iframe.prototype.clear = function () {
                /// <summary>Clear iframe content.Set  about:blank </summary>
                return this.url("about:blank");
            };

    /*#Extend iframe library*/

    

    /*Extend section library*/

    var _section = function (sectionName) {
        var selectedSection = null;
        var tabs = Xrm.Page.ui.tabs.get();
        for (var i in tabs) {
            var tab = tabs[i];
            tab.sections.forEach(function (section, index) {
                if (section.getName() == sectionName) {
                    selectedSection = section;
                }
            });
        }
        this.xControl = selectedSection;
        return this;
    }

            _section.prototype.hide = common.hide;

            _section.prototype.show = common.show;

            _section.prototype.label = common.label;

    /*#Extend section library*/

    

    /*Extend tab library*/

    var _tab = function (tabName) {
        this.xControl = Xrm.Page.ui.tabs.get(tabName)
        return this;
    }

            _tab.prototype.hide = common.hide;

            _tab.prototype.show = common.show;

            _tab.prototype.label = common.label;

            _tab.prototype.expand = function () {
                ///<summary>Set the tab expanded</summary>
                this.xControl.setDisplayState('expanded');
            }

            _tab.prototype.collapse = function () {
                ///<summary>Set the tab collapsed.</summary>
                this.xControl.setDisplayState('collapsed');
            }

            _tab.prototype.sections = function () {
                ///<sumary>Get sections of tab.</summary>
                var tab = this.xControl;
                var tabSections = [];
                tab.sections.forEach(function (section, index) {
                    tabSections.push(section);
                });
                return tabSections;
            }

    /*#Extend tab library*/


})();

