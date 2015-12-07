CKEDITOR.dialog.add( 'seekDialog', function( editor ) {
 	return {
 		title: 'Seek Properties',
 		minWidth: 400,
 		minHeight: 200,
 		contents: [
	 		{
	 			id: 'timepoint',
	 			label: 'Basic Settings',
	 			elements: [
					 			{
					 				type: 'text',
					 				id: 'time',
					 				label: 'Time',
					 				validate: CKEDITOR.dialog.validate.notEmpty( "Seek field cannot be empty." ),
					 				'default': '0.1',
					 				setup: function(element) {
                     this.setValue(element.getAttribute('title'));
                  },
					 			},
					 			{
					 				type: 'html',
					 				html: 'Seek to this point in the video eg. 0.10 or 1.15'
					 			}
	 			]
	 		}
 		],

	 	onShow: function() {
	 		var selection = editor.getSelection(),
	 				element = selection.getStartElement();

      if (element){
        element = element.getAscendant('a', true);
      }

      if (!element || element.getName() != 'a') {
          element = editor.document.createElement('a');
          this.insertMode = true;
      } else {
        this.insertMode = false;
      }

      this.element = element;
      if ( !this.insertMode ) {
        this.setupContent( this.element );
      }
		},

 		onOk: function() {
 			var dialog = this,
 					seek = editor.document.createElement( 'a' );

 			seek.setAttribute( 'href', '#');
 			seek.setAttribute( 'title', dialog.getValueOf( 'timepoint', 'time' ));
 			seek.setAttribute( 'data-time', dialog.getValueOf( 'timepoint', 'time' ));
 			seek.setAttribute( 'class', 'seek-point');
 			seek.setText(editor.getSelection().getSelectedText());
 			editor.insertElement(seek);
 		}
 	};
 });