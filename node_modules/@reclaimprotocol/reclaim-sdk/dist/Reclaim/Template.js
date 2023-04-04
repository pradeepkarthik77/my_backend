"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
/** Template instance */
class TemplateInstance {
    /**
     * Constructor
     * @param {Template} template
    */
    constructor(template) {
        this._template = template;
    }
    /**
     * Getter template
     * @return {Template}
    */
    get template() {
        return this._template;
    }
    /**
     * Getter id
     * @return {string}
     */
    get id() {
        return this._template.id;
    }
    /**
     * Getter template url
     * @return {string}
    */
    get url() {
        return config_1.RECLAIM_APP_URL + encodeURIComponent(JSON.stringify(this._template));
    }
}
exports.default = TemplateInstance;
