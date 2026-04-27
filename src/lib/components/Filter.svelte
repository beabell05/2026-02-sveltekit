<script>
    export let group;
    export let value;
</script>

<label>
    <input type="radio" value={value} bind:group />
    <span class="label-text">{value}</span>
</label>

<style>
    label {
        padding-block: var(--size-2);
        padding-inline: var(--size-4);
        border-radius: 999px;
        cursor: pointer;
        transition: background-color 0.25s var(--ease-out-quart);
        display: inline-flex;
        align-items: center;
        gap: var(--size-2);
    }

    label:hover {
        background-color: var(--color-filter--hover);
    }

    label:has(input:checked) {
        background-color: var(--color-filter--selected);
    }

    input { display: none; }

    .label-text { font-size: var(--type-small); }
</style>
