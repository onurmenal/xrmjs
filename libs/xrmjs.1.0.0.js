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
        } else if (this.type == "t" || this.type == "tab") {
            return new _tab(this.object);
        }
    };

    if (!window._) {
        window._ = _;
    }

    /*Constants*/

    _.context = Xrm.Page.context;

    _.entityName = function () {
        return Xrm.Page.data.entity.getEntityName();
    }

    _.recordId = function () {
        return Xrm.Page.data.entity.getId();
    }

    _.formType = function () {
        return Xrm.Page.ui.getFormType();
    }

    _.userId = function () {
        return _.context.getUserId();
    }

    _.clientUrl = function () {
        return _.context.getClientUrl();
    }

    _.serverUrl = function () {
        var clientUrl = _.clientUrl();
        var orgName = _.orgName();

        return clientUrl.replace(orgName, "");
    }

    _.orgName = function () {
        return _.context.getOrgUniqueName();
    }

    /*#Constants*/

    /*Common Methods*/

    var common = {
        clear: function () {
            return this.xControl.getAttribute().setValue(null);
        },

        hide: function () {
            return this.xControl.setVisible(false);
        },

        show: function () {
            return this.xControl.setVisible(true);
        },

        visible: function (bool) {
            return this.xControl.setVisible(bool);
        },

        /*
         * This method is obsolete, the method name should be "disable", not "disabled". 
         * However, this method was not removed for legacy reasons.
         */
        disabled: function () {
            return this.xControl.setDisabled(true);
        },

        /*
         * This method is obsolete, the method name should be "disable", not "disabled". 
         * However, this method was not removed for legacy reasons.
         */
        enabled: function () {
            return this.xControl.setDisabled(false);
        },

        disable: function () {
            return this.xControl.setDisabled(true);
        },

        enable: function () {
            return this.xControl.setDisabled(false);
        },

        setDisabled: function (bool) {
            return this.xControl.setDisabled(bool);
        },

        isEnable: function () {
            var status = this.xControl.getDisabled();
            return !status;
        },

        required: function (bool) {
            if (bool == true) {
                return this.xControl.getAttribute().setRequiredLevel("required");
            } else if (bool == false) {
                return this.xControl.getAttribute().setRequiredLevel("none");
            } else if (bool == null || bool == "") {
                return this.xControl.getAttribute().setRequiredLevel("required");
            } else {
                return null;
            }
        },

        isRequired: function () {
            return this.xControl.getRequiredLevel() == "required";
        },

        recommend: function () {
            this.xControl.setRequiredLevel("recommended");
        },

        isRecommended: function() {
            return this.xControl.getRequiredLevel() == "recommended";
        },

        label: function (text) {
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

        library.prototype.disable = common.disable;

        library.prototype.enable = common.enable;

        library.prototype.setDisabled = common.setDisabled;

        library.prototype.isEnable = common.isEnable;

        library.prototype.required = common.required;

        library.prototype.isRequired = common.isRequired;

        library.prototype.recommend = common.recommend;

        library.prototype.isRecommended = common.isRecommended;

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
        var selectedOption = this.xControl.getAttribute();
        return {
            text: selectedOption.getText(),
            value: selectedOption.getValue()
        };
    };

    _optionset.prototype.clear = function () {
        return this.xControl.clearOptions();
    };

    _optionset.prototype.options = function () {
        var result = [];
        var options = this.xControl.getAttribute().getOptions();
        for (var i in options) {
            if (options[i].value != "null") result.push({ text: options[i].text, value: options[i].value });
        }

        return result;
    };

    _optionset.prototype.labels = function () {
        var labels = [];
        var options = this.options();
        for (var i in options) {
            if (options[i].text != "null") labels.push(options[i].text);
        }

        return labels;
    };

    _optionset.prototype.values = function () {
        var values = [];
        var options = this.options();
        for (var i in options) {
            if (options[i].value != "null") values.push(options[i].value);
        }

        return values;
    };

    _optionset.prototype.addOption = function (option, index) {
        return this.xControl.addOption(option, index);
    };

    _optionset.prototype.removeOption = function (index) {
        return this.xControl.removeOption(index);
    };

    _optionset.prototype.getOption = function (value) {
        var option = this.xControl.getAttribute().getOption(value);
        return { text: option.text, value: option.value };
    }

    /*#Extend optionset library*/

    /*Extend iframe library*/

    var _iframe = function (iframeName) {
        this.xControl = Xrm.Page.getControl(iframeName);
        return this;
    }

    _iframe.prototype.hide = common.hide;

    _iframe.prototype.show = common.show;

    _iframe.prototype.url = function (url) {
        if (url) {
            return this.xControl.setSrc(url);
        } else {
            return this.xControl.getSrc();
        }
    };

    _iframe.prototype.clear = function () {
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
        this.xControl.setDisplayState('expanded');
    }

    _tab.prototype.collapse = function () {
        this.xControl.setDisplayState('collapsed');
    }

    _tab.prototype.sections = function () {
        var tab = this.xControl;
        var tabSections = [];
        tab.sections.forEach(function (section, index) {
            tabSections.push(section);
        });
        return tabSections;
    }

    /*#Extend tab library*/
})();
