function createPromise(e,t){var o=Math.random()>.3;return new Promise((function(i,n){setTimeout((function(){o?i({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var t=parseInt(this.querySelector('[name="delay"]').value),o=parseInt(this.querySelector('[name="step"]').value),i=parseInt(this.querySelector('[name="amount"]').value),n=[],a=0;a<i;a++){var r=createPromise(a+1,t+a*o);r.then((function(e){var t=e.position,o=e.delay;Notiflix.Notify.Success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(e){var t=e.position,o=e.delay;Notiflix.Notify.Failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),n.push(r)}Promise.all(n).then((function(){Notiflix.Notify.Info("All promises fulfilled")})).catch((function(){Notiflix.Notify.Info("At least one promise was rejected")}))}));
//# sourceMappingURL=03-promises.92ffa60c.js.map
