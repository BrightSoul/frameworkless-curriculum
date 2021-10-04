export default /* html */`
    <style>
        :host {
            display: inline-block;
            border: 1px solid black;
            border-radius: 3mm;
            padding: 2mm;
            flex-grow: 1;
            text-align: center;
            margin: 1mm;
        }
    </style>
    <slot></slot>
`;
