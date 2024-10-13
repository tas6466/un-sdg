import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class unSdg extends DDDSuper(LitElement) {

  static get tag() {
    return "un-sdg";
  }

  constructor() {
    super();
    this.goal = "circle";
  }

  static get properties() {
    return {
      goal: { type: String },
      color: { type: String },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        font-size: var(--un-sdg-font-size, var(--ddd-font-size-s));
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      div {
        padding: 0;
        margin: 0;
      }
    `];
  }

  updated(changedProperties) {
    if (changedProperties.has('goal')) {
      this.updateAlt();
    }
  }

  updateAlt() { // combine color, image, and label
    const goal = this.getAttribute('goal');
    imgSrc = new URL(`../public/svgs/${this.goal}.svg`, import.meta.url).href;
    
    switch (goal) {
      case 'circle':
        this.label = "Sustainable developments logo"; 
        break;
      case 'all':
        this.label = "Goal 1: No poverty, Goal 2: Zero hunger, Goal 3: Good health and well-being, Goal 4: Quality education, Goal 5: Gender equality, Goal 6: Clean water and sanitation, Goal 7: Affordable and clean energy, Goal 8: Decent work and economic growth, Goal 9: Industry, innovation and infrastructure, Goal 10: Reduced inequalities, Goal 11: Sustainable cities and communities, Goal 12: Responsible consumption and production, Goal 13: Climate action, Goal 14: Life below water, Goal 15: Life on land, Goal 16: Peace, justice and strong institutions, Goal 17: Partnerships for the goals";
        break;
      case '1':
        this.label = "Goal 1: No poverty";
        break;
      case '2':
        this.label = "Goal 2: Zero hunger";
        break;
      case '3':
        this.label = "Goal 3: Good health and well-being";
        break;
      case '4':
        this.label = "Goal 4: Quality education";
        break;
      case '5':
        this.label = "Goal 5: Gender equality";
        break;
      case '6':
        this.label = "Goal 6: Clean water and sanitation";
        break;
      case '7':
        this.label = "Goal 7: Affordable and clean energy";
        break;
      case '8':
        this.label = "Goal 8: Decent work and economic growth";
        break;
      case '9':
        this.label = "Goal 9: Industry, innovation and infrastructure";
        break;
      case '10':
        this.label = "Goal 10: Reduced inequalities";
        break;
      case '11':
        this.label = "Goal 11: Sustainable cities and communities";
        break;
      case '12':
        this.label = "Goal 12: Responsible consumption and production";
        break;
      case '13':
        this.label = "Goal 13: Climate action";
        break;
      case '14':
        this.label = "Goal 14: Life below water";
        break;
      case '15':
        this.label = "Goal 15: Life on land";
        break;
      case '16':
        this.label = "Goal 16: Peace, justice and strong institutions";
        break;
      case '17':
        this.label = "Goal 17: Partnerships for the goals";
        break; 
  }

  render() {
    return html;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(unSdg.tag, unSdg);