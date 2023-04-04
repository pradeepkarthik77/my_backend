import { Template } from "../types";
import TemplateInstance from "./Template";
/** Connection class */
export default class Connection {
    private template;
    private creatorPrivateKey;
    /**
     * Constructor
     * @param template
     * @param creatorPrivateKey
     */
    constructor(template: Template, creatorPrivateKey: string);
    /**
     * generate Template
     * @param callbackId
     * @returns {TemplateInstance}
     */
    generateTemplate: (callbackId: string) => TemplateInstance;
}
