export default /* html */`
    <style>
        table {
            width: 100%;
            border-top: 1px solid black;
            margin: 0;
        }
        td {
            width: 17%;
            text-align: center;
        }
        [data-language] {
            width: 15%;
            text-align: left;
        }
        [data-language] {
            padding: 1mm;
        }
    </style>
    <table>
    <tr>
        <th data-language></th>
        <td data-listening></td>
        <td data-reading></td>
        <td data-interaction></td>
        <td data-production></td>
        <td data-writing></td>
    </tr>
    </table>
`;
