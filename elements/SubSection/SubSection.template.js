export default /* html */`
    <style>
        :host {
            margin-bottom: 8mm;
        }
        h3 {
            margin-top: 0;
            margin-bottom: 3mm;
            text-transform: uppercase;
            font-size: 0.95em;
        }
    </style>
    <h3 data-title></h3>
    <slot></slot>
`;
