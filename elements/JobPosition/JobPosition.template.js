export default /* html */`
<style>
    [data-header] {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    h2 {
        margin: 0;
    }
    [data-area] {
        font-size: 0.7em;
        margin-left: 5mm;
        border-radius: 3mm;
    }
    [data-employer] {
        display: inline-block;
        min-width: 7.5em;
    }
    ::slotted(ul) {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
    [data-position] {
    }
    [data-period], .fa-calendar-alt {
        font-size: 0.9em;
    }
    </style>
    <div data-header>
        <h2><span data-employer></span><span data-area></span></h2>
        <span><i class="far fa-calendar-alt"></i> <time data-period></time></span>
    </div>
    <p data-position></p>
    <slot></slot></div>
`;
