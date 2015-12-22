(function xrmJS(window) {
    ///<summary>
    ///xrmJS Framework for Microsoft Dynamics CRM
    ///</summary>
    ///<description>
    ///
    /// -Control Independent Operation Samples
    ///      *  Clean the braces from the guid : _.cleanBraces("{0000-0000}");
    ///      *  Get Xrm page context : _.context()();
    ///      *  Get current entity name :  _.entityName();
    ///      *  Get current record id : _.recordId();
    ///      *  Get form type : _.formType();
    ///      *  Get control : _.getControl("new_name");
    ///      *  Get form controls  : _.formControls();
    ///      *  Get logged user id : _.userId();
    ///      *  Get client url : _.clientUrl();
    ///      *  Get server url : _.serverUrl();
    ///      *  Get soap url : _.soapUrl();
    ///      *  Get web service url : _.serviceUrl();
    ///      *  Get organization name : _.orgName();
    ///      *  Compare two guids : _.compareGuids("0000-0000","0000-0000");
    ///      *  Check null : isNull(value);
    ///      *  Check null or empty : isNullOrEmpty(value);
    ///
    /// -Field Operation Samples
    ///      *  Get the field control as default : _("f:new_field").control();
    ///      *  Clear the field value : _("f:new_field").clear();
    ///      *  Hide the field : _("f:new_field").hide();
    ///      *  Show the field: _("f:new_field").show();
    ///      *  Change visibility of field as true/false : _("f:new_field").visible(false);
    ///      *  Set disable the field : _("f:new_field").disable();
    ///      *  Set enable the field  : _("f:new_field").enable();
    ///      *  Change disable/enable status of field as true/false: _("f:new_field").setDisable(true);
    ///      *  Get enable/disable status of field: _("f:new_field").isEnable();
    ///      *  Set required level the field as required: _("f:new_field").required() or _("f:new_field").required(true);
    ///      *  Set required level the field as unrequired: _("f:new_field").required(false);
    ///      *  Get required level of field: _("f:new_field").isRequired();
    ///      *  Set required level the field as recomend: _("f:new_field").recomend();
    ///      *  Get label the field :_("f:new_field").label();
    ///      *  Set label the field : _("f:new_field");.label("new label text");
    ///      *  Get value the field : _("f:new_field").val()
    ///      *  Set value the field : _("f:new_field").val("new value");
    ///
    /// -Lookup Operation Samples
    ///      *  Get the lookup control as default : _("l:new_lookup").control();
    ///      *  Clear the lookup value : _("l:new_lookup").clear();
    ///      *  Hide the lookup : _("l:new_lookup").hide();
    ///      *  Show the lookup: _("l:new_lookup").show();
    ///      *  Change visibility of lookup as true/false : _("l:new_lookup").visible(false);
    ///      *  Set disable the lookup : _("l:new_lookup").disable();
    ///      *  Set enable the lookup  : _("l:new_lookup").enable();
    ///      *  Change disable/enable status of lookup as true/false: _("l:new_lookup").setDisable(true);
    ///      *  Get enable/disable status of lookup: _("l:new_lookup").isEnable();
    ///      *  Set required level the lookup as required: _("l:new_lookup").required() or _("l:new_lookup").required(true);
    ///      *  Set required level the lookup as unrequired: _("l:new_lookup").required(false);
    ///      *  Get required level of lookup: _("l:new_lookup").isRequired();
    ///      *  Set required level the lookup as recomend: _("l:new_lookup").recomend();
    ///      *  Get label the lookup :_("l:new_lookup").label();
    ///      *  Set label the lookup : _("l:new_lookup");.label("new label text");
    ///      *  Get value the lookup : _("l:new_lookup").val()
    ///      *  Set value the lookup : _("l:new_lookup").val({entityType:"Account" , name:"John Doe" , id:"0000-0000"});
    ///
    /// -Optionset Operation Samples
    ///      *  Get the optionset control as default : _("o:new_optionset").control();
    ///      *  Clear the optionset value : _("o:new_optionset").clear();
    ///      *  Hide the optionset : _("o:new_optionset").hide();
    ///      *  Show the optionset: _("o:new_optionset").show();
    ///      *  Change visibility of optionset as true/false : _("o:new_optionset").visible(false);
    ///      *  Set disable the optionset : _("o:new_optionset").disable();
    ///      *  Set enable the optionset  : _("o:new_optionset").enable();
    ///      *  Change disable/enable status of optionset as true/false: _("o:new_optionset").setDisable(true);
    ///      *  Get enable/disable status of optionset: _("o:new_optionset").isEnable();
    ///      *  Set required level the optionset as required: _("o:new_optionset").required() or _("o:new_optionset").required(true);
    ///      *  Set required level the optionset as unrequired: _("o:new_optionset").required(false);
    ///      *  Get required level of optionset: _("o:new_optionset").isRequired();
    ///      *  Set required level the optionset as recomend: _("o:new_optionset").recomend();
    ///      *  Get label the optionset :_("o:new_optionset").label();
    ///      *  Set label the optionset : _("o:new_optionset");.label("new label text");
    ///      *  Add option to optionset : _("o:new_optionset").addOption({text:"New Option" , value:1},1);
    ///      *  Remove option from optionset : _("o:new_optionset").removeOption(1);
    ///      *  Get options labels : _("o:new_optionset").labels();
    ///      *  Get options values : _("o:new_optionset").values();
    ///      *  Get selected option : _("o:new_optionset").selected();
    ///      *  Get option from opitonset : _("o:new_optionset").getOption(1);
    ///      *  Get all options : _("o_new_optionset").options();
    ///
    /// -Iframe Operation Samples
    ///      *  Get the iframe control as default : _("i:IFRAME_name").control();
    ///      *  Clear the iframe url : _("i:IFRAME_name").clear();
    ///      *  Hide the iframe : _("i:IFRAME_name").hide();
    ///      *  Show the iframe: _("i:IFRAME_name").show();
    ///      *  Set the iframe url: _("i:IFRAME_name").url("http://www.google.com");
    ///      *  Get the iframe url: _("i:IFRAME_name").url();
    ///      *  Refresh the iframe: _("i:IFRAME_name").refresh();
    ///      *  Get initial url: _("i:IFRAME_name").initialUrl();
    ///
    /// -Tab Operation Samples
    ///      *  Get the tab control as default : _("t:TAB_name").control();
    ///      *  Get the tab sections : _("t:TAB_name").sections();
    ///      *  Hide the tab : _("t:TAB_name").hide();
    ///      *  Show the tab: _("t:TAB_name").show();
    ///      *  Expand the tab: _("t:TAB_name").expand();
    ///      *  Collapse the tab: _("t:TAB_name").collapse();
    ///      *  Get the tab label: _("t:TAB_name").label();
    ///      *  Set the tab label: _("t:TAB_name").label("new label");
    ///</description>

    var $logger = {
        log: function (m) {
            if (typeof console.log != "undefined") {
                console.log(m);
            }
        },
        warn: function (m) {
            if (typeof console.warn != "undefined") {
                console.warn(m);
            } else {
                $logger.log(m);
            }
        },
        error: function (m) {
            if (typeof console.error != "undefined") {
                console.error(m);
            } else {
                $logger.log(m);
            }
        },
        debug: function (m) {
            if (typeof console.debug != "undefined") {
                console.debug(m);
            } else {
                $logger.log(m);
            }
        },
        info: function (m) {
            if (typeof console.info != "undefined") {
                console.info(m);
            } else {
                $logger.log(m);
            }
        }
    };

    if (typeof Xrm === "undefined") {
        $logger.error("Xrm page context not found!");
    }

    var crmFormControl, crmFormControlName, selectorType;
    var SEPARATOR = ":";
    var ALL = "*";
    var FIELD_SELECTORS = ["field", "f"];
    var LOOKUP_SELECTORS = ["lookup", "l"];
    var OPTIONSET_SELECTORS = ["optionset", "o"];
    var IFRAME_SELECTORS = ["iframe", "i"];
    var SECTION_SELECTORS = ["section", "s"];
    var TAB_SELECTORS = ["tab", "t"];

    var xrmJS = function (selector) {
        ///<summary>
        ///Select a crm form control with xrmJS selectors.<br/>
        ///   Field selection sample : _("f:new_field") or _("field:new_field");<br/>
        ///   Lookup selection sample : _("l:new_lookup") or _("lookup:new_lookup");<br/>
        ///   Optionset selection sample : _("o:new_optionset") or _("optionset:new_optionset");<br/>
        ///   Iframe selection sample : _("i:IFRAME_name") or _("iframe:IFRAME_name");<br/>
        ///   Section selection sample : _("s:SECTION_name") or _("section:SECTION_name");<br/>
        ///   Tab selection sample : _("t:TAB_name") or _("t:TAB_name");<br/>
        ///</summary>
        if (selector.indexOf(SEPARATOR) > -1) {
            var properties = selector.split(SEPARATOR);
            if (properties.length == 2) {
                selectorType = properties[0];
                crmFormControlName = properties[1];

                if (FIELD_SELECTORS.indexOf(selectorType) > -1) {
                    //return field operations
                    crmFormControl = _.getControl(crmFormControlName);
                    return {
                        control: commonOperations.control,
                        clear: commonOperations.clear,
                        hide: commonOperations.hide,
                        show: commonOperations.show,
                        visible: commonOperations.visible,
                        disable: commonOperations.disable,
                        enable: commonOperations.enable,
                        setDisabled: commonOperations.setDisabled,
                        isEnable: commonOperations.isEnable,
                        required: commonOperations.required,
                        isRequired: commonOperations.isRequired,
                        recommend: commonOperations.recomend,
                        label: commonOperations.label,
                        parent: commonOperations.parent,
                        name: commonOperations.name,
                        focus: commonOperations.focus,
                        isValueChanged: commonOperations.isValueChanged,
                        hasValue: commonOperations.hasValue,
                        val: fieldOperations.val,
                    };
                } else if (LOOKUP_SELECTORS.indexOf(selectorType) > -1) {
                    //return lookup operations
                    crmFormControl = _.getControl(crmFormControlName);
                    return {
                        control: commonOperations.control,
                        clear: commonOperations.clear,
                        hide: commonOperations.hide,
                        show: commonOperations.show,
                        visible: commonOperations.visible,
                        disable: commonOperations.disable,
                        enable: commonOperations.enable,
                        setDisabled: commonOperations.setDisabled,
                        isEnable: commonOperations.isEnable,
                        required: commonOperations.required,
                        isRequired: commonOperations.isRequired,
                        recommend: commonOperations.recomend,
                        label: commonOperations.label,
                        parent: commonOperations.parent,
                        name: commonOperations.name,
                        focus: commonOperations.focus,
                        isValueChanged: commonOperations.isValueChanged,
                        hasValue: commonOperations.hasValue,
                        val: lookupOperations.val
                    };
                } else if (OPTIONSET_SELECTORS.indexOf(selectorType) > -1) {
                    //return optionset operations
                    crmFormControl = _.getControl(crmFormControlName);
                    return {
                        control: commonOperations.control,
                        clear: clearOptionset,
                        hide: commonOperations.hide,
                        show: commonOperations.show,
                        visible: commonOperations.visible,
                        disable: commonOperations.disable,
                        enable: commonOperations.enable,
                        setDisabled: commonOperations.setDisabled,
                        isEnable: commonOperations.isEnable,
                        required: commonOperations.required,
                        isRequired: commonOperations.isRequired,
                        recommend: commonOperations.recomend,
                        label: commonOperations.label,
                        parent: commonOperations.parent,
                        name: commonOperations.name,
                        focus: commonOperations.focus,
                        isValueChanged: commonOperations.isValueChanged,
                        hasValue: commonOperations.hasValue,
                        selected: selectedOption,
                        labels: optionLabels,
                        values: optionValues,
                        addOption: optionsetOperations.addOption,
                        removeOption: optionsetOperations.removeOption,
                        getOption: optionsetOperations.getOption,
                        options: optionsetOperations.options
                    };
                } else if (IFRAME_SELECTORS.indexOf(selectorType) > -1) {
                    //return iframe operations
                    crmFormControl = _.getControl(crmFormControlName);
                    return {
                        control: commonOperations.control,
                        hide: commonOperations.hide,
                        show: commonOperations.show,
                        parent: commonOperations.parent,
                        name: commonOperations.name,
                        focus: commonOperations.focus,
                        clear: iframeOperations.clear,
                        url: iframeOperations.url,
                        initialUrl: iframeOperations.initialUrl
                    };
                } else if (SECTION_SELECTORS.indexOf(selectorType) > -1) {
                    //return section operations
                    crmFormControl = sectionOperations.getSection(crmFormControlName);
                    return {
                        control: commonOperations.control,
                        hide: commonOperations.hide,
                        show: commonOperations.show,
                        label: commonOperations.label,
                        parent: commonOperations.parent,
                        name: commonOperations.name,
                    }
                } else if (TAB_SELECTORS.indexOf(selectorType) > -1) {
                    //return tab operations
                    crmFormControl = Xrm.Page.ui.tabs.get(crmFormControlName);
                    return {
                        control: commonOperations.control,
                        hide: commonOperations.hide,
                        show: commonOperations.show,
                        label: commonOperations.label,
                        parent: commonOperations.parent,
                        name: commonOperations.name,
                        expand: tabOperations.expand,
                        collapse: tabOperations.collapse,
                        sections: tabOperations.sections
                    };
                }
            } else {
                $logger.error("'" + selector + "' Invalid selector.");
                return null;
            }
        } else {
            $logger.error("'" + selector + "' Invalid selector.");
            return null;
        }
    };
    xrmJS.cleanBraces = function (guid) {
        /// <summary>
        ///Clean the braces from guid.
        ///</summary>
        ///<param name="guid" optional="false">Will be cleaned guid.</param>
        if (guid) return guid.replace(/[\{\}]/g, '');
    }
    xrmJS.context = function () {
        ///<summary>
        ///Returns the Xrm page context.
        ///</summary>
        return Xrm.Page.context;
    }
    xrmJS.entityName = function () {
        ///<summary>
        ///Returns the current entity logical name.
        ///</summary>
        try {
            return Xrm.Page.data.entity.getEntityName();
        } catch (e) {
            $logger.error("Getting current entity name  , failed!");
            $logger.debug(e);
            return null;
        }
    }
    xrmJS.recordId = function (withBraces) {
        ///<summary>
        ///Get current record id.
        ///</summary>
        ///<param name="withBraces" type="boolean" optional="true">if withBraces equals true , return current record guid with braces else return current record guid without braces.</param>
        if (withBraces) {
            if (withBraces == true)
                return Xrm.Page.data.entity.getId();
            else
                return _.cleanBraces(Xrm.Page.data.entity.getId());
        }
        else {
            return Xrm.Page.data.entity.getId();
        }
    }
    xrmJS.formType = function () {
        ///<summary>
        ///Returns form type .
        ///</summary>
        try {
            return Xrm.Page.ui.getFormType();
        } catch (e) {
            $logger.error("Getting form type , failed!");
            $logger.debug();
            return null;
        }
    }
    xrmJS.getControl = function (controlName) {
        ///<summary>
        ///Get control by name as default.
        ///</summary>
        if (controlName) return Xrm.Page.getControl(controlName);
    }
    xrmJS.formControls = function () {
        ///<summary>
        ///Returns all controls of the form .
        ///</summary>
        return Xrm.Page.ui.controls;
    }
    xrmJS.userId = function (withBraces) {
        ///<summary>
        ///Get logged user id.
        ///</summary>
        ///<param name="withBraces" type="boolean" optional="true">if withBraces equals true , return user guid with braces else return user guid without braces.</param>
        try {
            if (withBraces) {
                if (withBraces == true)
                    return _.context().getUserId();
                else
                    return _.cleanBraces(_.context().getUserId());
            } else {
                return _.context().getUserId();
            }
        } catch (e) {
            $logger.error("Getting logged user id , failed!");
            $logger.debug(e);
            return null;
        }
    }
    xrmJS.clientUrl = function () {
        ///<summary>
        ///Get client url.
        ///</summary>
        try {
            return _.context().getClientUrl();
        } catch (e) {
            $logger.error("Getting client url , failed!");
            $logger.debug(e);
            return null;
        }
    }
    xrmJS.serverUrl = function () {
        /// <summary>
        ///Get server url.for CRM 2011 and CRM 2013
        ///</summary>
        try {
            var clientUrl = _.clientUrl();
            var protocol = (clientUrl.indexOf("https://") > -1) ? "https://" : "http://";
            var domain = clientUrl.replace(protocol, "");
            var orgName = "/" + _.orgName();
            return protocol + domain.replace(orgName, "");
        } catch (e) {
            $logger.error("Getting server url , failed!");
            $logger.debug(e);
            return null;
        }
    }
    xrmJS.soapUrl = function () {
        /// <summary>
        ///Get soap url.
        ///</summary>
        return _.serverUrl() + "/XRMServices/2011/Organization.svc/web";
    },
    xrmJS.serviceUrl = function () {
        /// <summary>
        ///Get service url.
        ///</summary>
        return _.serverUrl() + "/XRMServices/2011/OrganizationData.svc";
    },
    xrmJS.orgName = function () {
        ///<summary>
        ///Get ortanization name.
        ///</summary>
        try {
            return _.context().getOrgUniqueName();
        } catch (e) {
            $logger.error("Getting organization name  , failed!");
            $logger.debug(e);
            return null;
        }
    }
    xrmJS.compareGuids = function (guid1, guid2) {
        /// <summary>
        ///Compare two guids. if guid are equal returns true , other wise  false.
        ///</summary>
        ///<param name="guid1" type="guid" optional="false">Comperad first guid.</param>
        ///<param name="guid2" type="guid" optional="false">Compared second guid.</param>
        try {
            guid1 = _.cleanBraces(guid1.toString()).toLowerCase();
            guid2 = _.cleanBraces(guid2.toString()).toLowerCase();
            return guid1 === guid2;
        } catch (e) {
            $logger.error("Comparing '" + guid1 + "' and '" + guid2 + "'  , failed!");
            $logger.debug(e);
            return false;
        }
    };
    xrmJS.isNull = function (value) {
        /// <summary>
        ///Null check. If value equals null , undefined or NaN returns true  ,  otherwise false.
        ///</summary>
        ///<param name="value" optional="false">Value for null check.</param>
        if (typeof value == "undefined" || typeof value == 'NaN' || value == null) return true;
        return false;
    }
    xrmJS.isNullOrEmpty = function (value) {
        /// <summary>
        ///Null and empty check. If value equals null , undefined , NaN  or empty string returns true  ,  otherwise false.
        ///</summary>
        ///<param name="value" optional="false">Value for null or empty check.</param>
        if (_.isNull(value) || (typeof value == "string" && value.trim() == "")) return true;
        return false;
    }
    xrmJS.redirectToEntity = function (entityName, recordId) {
        /// <summary>
        ///Redirect to another entity record.
        ///</summary>
        ///<param name="entityName" optional="false">Will be redirect entity name</param>
        ///<param name="recordId" optional="false">Will be redirect entity record id</param>
        if (entityName && recordId) {
            var url = _.clientUrl() + "/main.aspx?etn=" + entityName + "&id=" + recordId + "&pagetype=entityrecord";
            window.location.href = url;
        }
    }

    var commonOperations = {
        control: function () {
            ///<summary>
            ///Get crm form control.
            ///</summary>
            if (crmFormControl)
                return crmFormControl;
            return null;
        },
        clear: function () {
            /// <summary>
            ///Clear the crm form control value.
            ///</summary>
            try {
                return crmFormControl.getAttribute().setValue(null);
            } catch (e) {
                $logger.error("Cleaning value of " + crmFormControlName + " failed!");
                $logger.debug(e);
                return null;
            }
        },
        hide: function () {
            /// <summary>
            ///Hide the form control  from crm form .
            ///</summary>
            try {
                return crmFormControl.setVisible(false);
            } catch (e) {
                $logger.error("Changing visibility " + crmFormControlName + " form control as hide , failed!");
                $logger.debug(e);
                return null;
            }
        },
        show: function () {
            /// <summary>
            ///Show the form control  on crm form .
            ///</summary>
            try {
                return crmFormControl.setVisible(true);
            } catch (e) {
                $logger.error("Changing visibility of " + crmFormControlName + " form control as true , failed!");
                $logger.debug(e);
                return null;
            }
        },
        visible: function (bool) {
            /// <summary>
            ///Change crm form control visibility as true/false.
            ///</summary>
            ///<param name="bool" type="boolean" optional="false">True if the control is show, otherwise false.</param>
            try {
                return crmFormControl.setVisible(bool);
            } catch (e) {
                $logger.error("Changing visibility of " + crmFormControlName + " form control failed!");
                $logger.debug(e);
                return null
            }
        },
        disable: function () {
            /// <summary>
            ///Set disable the crm form control .
            ///</summary>
            try {
                return crmFormControl.setDisabled(true);
            } catch (e) {
                $logger.error("Changing disable/enable status of " + crmFormControlName + " form control as disable ,  failed! ");
                $logger.debug(e);
                return null;
            }
        },
        enable: function () {
            /// <summary>
            ///Set enable the crm form control .
            ///</summary>
            try {
                return crmFormControl.setDisabled(false);
            } catch (e) {
                $logger.error("Changing disable/enable status of " + crmFormControlName + " form control as enable ,  failed! ");
                $logger.debug(e);
                return null;
            }
        },
        setDisabled: function (bool) {
            /// <summary>
            ///Change disable/enable status of crm form control as true/false .
            ///</summary>
            ///<param name="bool" type="boolean" optional="false">True if the control is disable, otherwise false.</param>
            try {
                return crmFormControl.setDisabled(bool);
            } catch (e) {
                $logger.error("Changing disable/enable status of " + crmFormControlName + "  form control with bool parameter as " + bool + " ,  failed! ");
                $logger.debug(Error);
                return null;
            }
        },
        isEnable: function () {
            /// <summary>
            ///Get crm form control disable enable status.
            ///</summary>
            try {
                var status = crmFormControl.getDisabled();
                return !status;
            } catch (e) {
                $logger.error("Getting disable/enable status of " + crmFormControlName + " form control , failed!");
                $logger.debug(e);
                return null;
            }
        },
        required: function (bool) {
            /// <summary>
            ///Change required level of crm form control as true/false.
            ///</summary>
            ///<param name="bool" type="boolean" optional="true">True or empty if the control is required, otherwise false.</param>
            try {
                if (bool == false) {
                    return crmFormControl.getAttribute().setRequiredLevel("none");
                } else {
                    return crmFormControl.getAttribute().setRequiredLevel("required");
                }
            } catch (e) {
                $logger.error("Changing required level of " + crmFormControlName + " form control , failed !");
                $logger.debug(e);
                return null;
            }
        },
        isRequired: function () {
            /// <summary>
            ///Get required level  as true/false.If crm form control is required return true otherwise return false.
            ///</summary>
            try {
                return crmFormControl.getRequiredLevel() == "required";
            } catch (e) {
                $logger.error("Getting required level of " + crmFormControlName + " form control ,failed!");
                $logger.debug(e);
                return null;
            }
        },
        recomend: function () {
            /// <summary>
            ///Set required level of crm form control as recommended.
            ///</summary>
            try {
                crmFormControl.setRequiredLevel("recommended");
            } catch (e) {
                $logger.error("Setting required level of " + crmFormControlName + " as 'recomended' , failed!");
                $logger.debug(e);
                return null;
            }
        },
        isRecommended: function () {
            /// <summary>
            ///Get recommended level  as true/false.If crm form control is recommended return true otherwise return false.
            ///</summary>
            try {
                return crmFormControl.getRequiredLevel() == "recommended";
            } catch (e) {
                $logger.error("Getting recomend status of " + crmFormControlName + " form control , failed!");
                $logger.debug(e);
                return null;
            }
        },
        label: function (text) {
            /// <summary>
            ///Get or set crm form control label .
            ///</summary>
            ///<param name="text" type="string" optional="true">If "text" variable contain a value  ,  set crm form control label as text otherwise get crm form control label.</param>
            if (text) {
                try {
                    return crmFormControl.setLabel(text);
                } catch (e) {
                    $logger.error("Setting label of " + crmFormControlName + " form control , failed!");
                    $logger.debug(e);
                    return null;
                }
            } else {
                try {
                    return crmFormControl.getLabel();
                } catch (e) {
                    $logger.error("Getting label of " + crmFormControlName + " form control , failed!");
                    $logger.debug(e);
                    return null;
                }
            }
        },
        isValueChanged: function () {
            /// <summary>
            ///If crm form control value has been changed returns true otherwise return false .
            ///</summary>
            try {
                return crmFormControl.get_isDirty();
            } catch (e) {
                $logger.error("Getting  dirty mode of '" + crmFormControlName + "' , failed!");
                $logger.debug(e);
                return null;
            }
        },
        hasValue: function () {
            /// <summary>
            ///If crm form control  has a value returns true else return false .
            ///</summary>
            var value = crmFormControl.getAttribute().getValue();
            if (typeof value != "undefined" && value != null) {
                return true
            }
            return false;
        },
        focus: function () {
            /// <summary>
            ///Focus selected control.
            ///</summary>
            try {
                return crmFormControl.setFocus();
            } catch (e) {
                $logger.error("Focusing crm control  ,  failed!");
                $logger.debug(e);
                return null;
            }
        },
        name: function () {
            /// <summary>
            ///Get assigned name to the control.
            ///</summary>
            try {
                return crmFormControl.getName();
            } catch (e) {
                $logger.error("Getting assigned name to crm control  ,  failed! ");
            }
        },
        parent: function () {
            /// <summary>
            ///Get parent of crm control.
            ///</summary>
            try {
                return crmFormControl.getParent();
            } catch (e) {
                $logger.error("Getting parent of " + crmFormControlName + " crm control , failed! ");
                $logger.debug(e);
                return null;
            }
        }
    }
    var fieldOperations = {
        val: function (value) {
            /// <summary>
            ///Get or set field value.
            ///</summary>
            ///<param name="value" type="string" optional="true">If value variable contain a value  ,  set crm form control value  otherwise get crm form control value.</param>
            if (value) {
                try {
                    return crmFormControl.getAttribute().setValue(value);
                } catch (e) {
                    $logger.error("Setting value of " + crmFormControlName + " form control , failed!");
                    $logger.debug(e);
                    return;
                }
            } else {
                try {
                    return crmFormControl.getAttribute().getValue();
                } catch (e) {
                    $logger.error("Getting value of " + crmFormControlName + " form control , failed!");
                    $logger.debug(e);
                    return null;
                }
            }
        }
    }
    var lookupOperations = {
        val: function (value) {
            /// <summary>
            ///Get or set lookup value.
            ///</summary>
            ///<param name="value" type="json" optional="true">If value variable contain a value like this: {entityType:"Account",name:"John Doe",id:"0000-0000"}  ,  set crm form control value  otherwise get crm form control value.</param>
            if (value) {
                try {
                    var lookupValue = new Array();
                    lookupValue[0] = value;
                    return crmFormControl.getAttribute().setValue(lookupValue);
                } catch (e) {
                    $logger.error("Setting value of " + crmFormControlName + " lookup control , failed!");
                    $logger.debug(e);
                    return null;
                }
            } else {
                try {
                    var lookupField = crmFormControl.getAttribute().getValue();
                    if (lookupField) {
                        lookupField = lookupField[0];
                        return ({ entityType: lookupField.entityType, id: lookupField.id, name: lookupField.name });
                    } else {
                        return null;
                    }
                } catch (e) {
                    $logger.error("Getting value of " + crmFormControlName + " lookup control , failed!");
                    $logger.debug(e);
                    return null;
                }
            }
        }
    }
    var optionsetOperations = {
        selected: function () {
            /// <summary>
            ///Get selected option.
            ///</summary>
            try {
                var selectedOption = crmFormControl.getAttribute();
                return {
                    text: selectedOption.getText(),
                    value: selectedOption.getValue()
                };
            } catch (e) {
                $logger.error("Getting selected option from " + crmFormControlName + " optionset control, failed!");
                $logger.error(e);
                return null;
            }
        },
        clear: function () {
            /// <summary>
            ///Clear the option set value.
            ///</summary>
            try {
                return crmFormControl.clearOptions();
            } catch (e) {
                $logger.error("Cleaning value of " + crmFormControlName + " optionset control , failed!");
                $logger.debug(e);
                return null;
            }
        },
        options: function () {
            /// <summary>
            ///Get option set options
            ///</summary>
            try {
                var result = [];
                var options = crmFormControl.getAttribute().getOptions();
                for (var i in options) {
                    if (options[i].value != "null") result.push({ text: options[i].text, value: options[i].value });
                }
                return result;
            } catch (e) {
                $logger.error("Getting options of " + crmFormControlName + " optionset control , failed!");
                $logger.debug(e);
                return null;
            }
        },
        labels: function () {
            /// <summary>
            ///Get optionset labels.
            ///</summary>
            try {
                var labels = [];
                var options = this.options();
                for (var i in options) {
                    if (options[i].text != "null") labels.push(options[i].text);
                }
                return labels;
            } catch (e) {
                $logger.error("Getting labels of " + crmFormControlName + " optionset control , failed!");
                $logger.debug(e);
                return null;
            }
        },
        values: function () {
            /// <summary>
            ///Get optionset values.
            ///</summary>
            try {
                var values = [];
                var options = this.options();
                for (var i in options) {
                    if (options[i].value != "null") values.push(options[i].value);
                }
                return values;
            } catch (e) {
                $logger.error("Getting values of " + crmFormControlName + " optionset control , failed!");
                $logger.debug(e);
                return null;
            }
        },
        addOption: function (option, index) {
            /// <summary>
            ///Add option to optionset.
            ///</summary>
            ///<param name="option" type="json" optional="false">New option , like this {text:"Foo",value:1}</param>
            ///<param name="index" type="int" optional="false">New option index.</param>
            try {
                return crmFormControl.addOption(option, index);
            } catch (e) {
                $logger.error("Adding new option to " + crmFormControlName + " optionset control , failed!");
                $logger.debug(e);
                return null;
            }
        },
        removeOption: function (index) {
            /// <summary>
            ///Remove option by index.
            ///</summary>
            ///<param name="index" type="int" optional="false">Index of removed option.</param>
            try {
                return crmFormControl.removeOption(index);
            } catch (e) {
                $logger.error("Removing option from " + crmFormControlName + " optionset control , failed!");
                $logger.debug(e);
                return null;
            }
        },
        getOption: function (value) {
            /// <summary>
            ///Get option by value.
            ///</summary>
            ///<param name="value" type="int" optional="false">Option value.</param>
            try {
                var option = crmFormControl.getAttribute().getOption(value);
                return { text: option.text, value: option.value };
            } catch (e) {
                $logger.error("Getting option from " + crmFormControlName + " optionset control , failed!");
                $logger.debug(e);
                return null;
            }
        }
    }
    var iframeOperations = {
        url: function (url) {
            /// <summary>
            ///Get or set iframe url.
            ///</summary>
            ///<param name="url" type="string" optional="true">If url variable contains a value  ,  set iframe url  otherwise get iframe url.</param>
            if (url) {
                try {
                    return crmFormControl.setSrc(url);
                } catch (e) {
                    $logger.error("Setting url of " + crmFormControlName + " iframe control , failed!");
                    $logger.debug(e);
                    return null;
                }
            } else {
                try {
                    return crmFormControl.getSrc();
                } catch (e) {
                    $logger.error("Getting url of " + crmFormControlName + " iframe control , failed!");
                    $logger.debug(e);
                    return null;
                }
            }
        },
        clear: function () {
            /// <summary>
            ///Clear iframe url.
            ///</summary>
            return this.url("about:blank");
        },
        refresh: function () {
            /// <summary>
            ///Refresh iframe.
            ///</summary>
            var currentUrl = this.url();
            return this.url(currentUrl);
        },
        initialUrl: function () {
            /// <summary>
            ///Returns iframe initial url.
            ///</summary>
            try {
                return crmFormControl.getInitialUrl();
            } catch (e) {
                $logger.error("Returning initial url of " + crmFormControlName + " iframe control ,  failed!");
                $logger.debug(e);
                return null;
            }
        }
    }
    var sectionOperations = {
        getSection: function (sectionName) {
            var tabs = Xrm.Page.ui.tabs.get();
            for (var i in tabs) {
                var tab = tabs[i];
                tab.sections.forEach(function (section, index) {
                    if (section.getName() == sectionName) {
                        return section;
                    }
                });
            }
        }
    }
    var tabOperations = {
        expand: function () {
            /// <summary>
            ///Expand the tab control.
            ///</summary>
            try {
                return crmFormControl.setDisplayState('expanded');
            } catch (e) {
                $logger.error("Expanding " + crmFormControlName + " tab control , failed!");
                $logger.debug(e);
                return null;
            }
        },
        collapse: function () {
            /// <summary>
            ///Collapse the tab control.
            ///</summary>
            try {
                crmFormControl.setDisplayState('collapsed');
            } catch (e) {
                $logger.error("Collapsing " + crmFormControlName + " tab control , failed!");
                $logger.debug(e);
                return null;
            }
        },
        sections: function () {
            /// <summary>
            ///Get sections of tab control.
            ///</summary>
            try {
                var tabSections = [];
                crmFormControl.sections.forEach(function (section, index) {
                    tabSections.push(section);
                });
                return tabSections;
            } catch (e) {
                $logger.error("Getting sections of " + crmFormControlName + " tab control , failed!");
                $logger.debug(e);
                return null;
            }
        }
    }

    window._ = xrmJS;
})(typeof window != "undefined" ? window : {})