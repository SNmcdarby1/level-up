// 
// Scripts
// 

window.addEventListener( 'DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector( '#sidebarToggle' );
    if ( sidebarToggle ) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener( 'click', event => {
            event.preventDefault();
            document.body.classList.toggle( 'sb-sidenav-toggled' );
            localStorage.setItem( 'sb|sidebar-toggle', document.body.classList.contains( 'sb-sidenav-toggled' ) );
        } );
    }

} );

const concurrently = require( 'concurrently' );
const upath = require( 'upath' );

const browserSyncPath = upath.resolve( upath.dirname( __filename ), '../node_modules/.bin/browser-sync' );

concurrently( [
    { command: 'node scripts/sb-watch.js', name: 'SB_WATCH', prefixColor: 'bgBlue.bold' },
    {
        command: `"${ browserSyncPath }" --reload-delay 2000 --reload-debounce 2000 dist -w --no-online`,
        name: 'SB_BROWSER_SYNC',
        prefixColor: 'bgGreen.bold',
    }
], {
    prefix: 'name',
    killOthers: [ 'failure', 'success' ],
} ).then( success, failure );

function success () {
    console.log( 'Success' );
}

function failure () {
    console.log( 'Failure' );
}