// https://gist.github.com/gaearon/886641422b06a779a328

// Usage example:
//
// willTransitionTo(transition, params, query, callback) {
//   observeStore(DraftStore, s => s.isLoaded()).then(() => {
//     if (DraftStore.isMissingTitle()) {
//       transition.redirect('composeDraft', params);
//     }
//   }).finally(callback);
// }

import Promise from 'bluebird';

export default const observeStore = (store, predicate) => {
  var performCheck;

  return new Promise(resolve => {
    performCheck = () => {
      if (predicate.call(null, store)) {
        resolve();
      }
    };

    store.addChangeListener(performCheck);
    performCheck();
  }).finally(() => {
    store.removeChangeListener(performCheck);
  });
}
