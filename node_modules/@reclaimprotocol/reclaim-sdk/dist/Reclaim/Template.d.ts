import { Template } from "../types";
/** Template instance */
export default class TemplateInstance {
    /**
     * Property template
     * @type {Template}
     */
    private _template;
    /**
     * Constructor
     * @param {Template} template
    */
    constructor(template: Template);
    /**
     * Getter template
     * @return {Template}
    */
    get template(): Template;
    /**
     * Getter id
     * @return {string}
     */
    get id(): string;
    /**
     * Getter template url
     * @return {string}
    */
    get url(): string;
}
