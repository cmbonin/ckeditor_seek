/**
 * Allows users to add a time reference to an anchor tag
 * 
 */

CKEDITOR.plugins.add( 'seek', {
    icons: 'seek',
    init: function( editor ) {
        editor.addCommand( 'seek', new CKEDITOR.dialogCommand( 'seekDialog' ) );
        editor.ui.addButton( 'seek', {
            label: 'Video seek point',
            command: 'seek',
            toolbar: 'seek'
        });

        CKEDITOR.dialog.add( 'seekDialog', this.path + 'dialogs/seek.js' );
    }
});