Package.describe({
    summary: "Polyfill for position:sticky CSS"
});

Package.on_use(function(api){
    api.add_files('lib/sticky.js', 'client');
});