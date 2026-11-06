/* Fusion equipment comparison. Text and family names come from the localized HTML. */
(() => {
  'use strict';

  function init(root) {
    if (root.hasAttribute('data-ab-compare-ready')) return;

    const picks = [...root.querySelectorAll('[data-ab-compare-pick]')];
    const fieldset = root.querySelector('[data-ab-compare-picks]');
    const table = root.querySelector('[data-ab-compare-table]');
    const status = root.querySelector('[data-ab-compare-status]');
    const reset = root.querySelector('[data-ab-compare-reset]');
    const inquiry = root.querySelector('[data-ab-compare-inquiry]');
    if (picks.length !== 4 || !fieldset || !table || !status || !reset || !inquiry) return;

    const ids = picks.map(pick => pick.value);
    const columns = [...table.querySelectorAll('[data-ab-compare-column]')];
    const text = name => root.getAttribute('data-ab-compare-' + name) || '';
    const alias = id => id === 'multi' ? 'multistage' : id;
    const normalize = values => {
      const requested = new Set(values.map(alias));
      return ids.filter(id => requested.has(id));
    };

    let selected = [...ids];
    try {
      const requested = normalize((new URL(location.href).searchParams.get('families') || '').split(','));
      if (requested.length >= 2) selected = requested;
    } catch (_) {
      // With no usable URL, the complete static four-family comparison remains the default.
    }

    function updateUrl() {
      try {
        const url = new URL(location.href);
        if (selected.length === ids.length) url.searchParams.delete('families');
        else url.searchParams.set('families', selected.join(','));
        history.replaceState(history.state, '', url);
      } catch (_) {
        // Some file:// environments restrict history updates. Selection still works locally.
      }
    }

    function render(notice = '', writeUrl = true) {
      selected = normalize(selected);
      picks.forEach(pick => { pick.checked = selected.includes(pick.value); });
      columns.forEach(column => {
        column.hidden = !selected.includes(column.getAttribute('data-ab-compare-column'));
      });

      const summary = text('status-template').replace('{count}', String(selected.length));
      status.textContent = notice ? notice + ' ' + summary : summary;
      table.style.minWidth = (196 + selected.length * 232) + 'px';
      root.setAttribute('data-ab-compare-count', String(selected.length));

      const names = picks
        .filter(pick => selected.includes(pick.value))
        .map(pick => pick.getAttribute('data-ab-compare-name') || pick.value);
      inquiry.setAttribute('data-inquire',
        text('inquiry-prefix') + names.join(text('inquiry-separator')) + text('inquiry-suffix'));

      if (writeUrl) updateUrl();
    }

    picks.forEach(pick => pick.addEventListener('change', () => {
      const next = normalize(picks.filter(input => input.checked).map(input => input.value));
      if (next.length < 2) {
        render(text('minimum-notice'), false);
        return;
      }
      selected = next;
      render();
    }));

    reset.addEventListener('click', () => {
      selected = [...ids];
      render(text('reset-notice'));
    });

    fieldset.disabled = false;
    reset.disabled = false;
    root.setAttribute('data-ab-compare-ready', 'true');
    render('', false);
  }

  function start() {
    document.querySelectorAll('[data-ab-compare]').forEach(init);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, {once: true});
  else start();
})();
