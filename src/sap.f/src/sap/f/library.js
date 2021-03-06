/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library sap.f.
 */
sap.ui.define(["jquery.sap.global",
	"sap/ui/core/library", "sap/m/library"], // library dependency
	function() {

	"use strict";

	/**
	 * SAPUI5 library with controls specialized for Fiori applications.
	 *
	 * @namespace
	 * @name sap.f
	 * @author SAP SE
	 * @version ${version}
	 * @public
	 */

	// delegate further initialization of this library to the Core
	sap.ui.getCore().initLibrary({
		name : "sap.f",
		version: "${version}",
		dependencies : ["sap.ui.core", "sap.m"],
		types: [
			"sap.f.LayoutType"
		],
		controls: [
			"sap.f.Avatar",
			"sap.f.DynamicPage",
			"sap.f.DynamicPageHeader",
			"sap.f.DynamicPageTitle",
			"sap.f.FlexibleColumnLayout"
		],
		elements: []
	});

	/**
	 * Types of layout for the sap.f.FlexibleColumnLayout control.
	 *
	 * @enum {string}
	 * @public
	 * @since 1.46
	 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
	 */
	sap.f.LayoutType = {

		/**
		 * Description
		 * @public
		 */
		OneColumn: "OneColumn",

		/**
		 * Description
		 * @public
		 */
		TwoColumnsBeginExpanded: "TwoColumnsBeginExpanded",

		/**
		 * Description
		 * @public
		 */
		TwoColumnsMidExpanded: "TwoColumnsMidExpanded",

		/**
		 * Description
		 * @public
		 */
		MidColumnFullScreen: "MidColumnFullScreen",

		/**
		 * Description
		 * @public
		 */
		ThreeColumnsMidExpanded: "ThreeColumnsMidExpanded",

		/**
		 * Description
		 * @public
		 */
		ThreeColumnsEndExpanded: "ThreeColumnsEndExpanded",

		/**
		 * Description
		 * @public
		 */
		ThreeColumnsMidExpandedEndHidden: "ThreeColumnsMidExpandedEndHidden",

		/**
		 * Description
		 * @public
		 */
		ThreeColumnsBeginExpandedEndHidden: "ThreeColumnsBeginExpandedEndHidden",

		/**
		 * Description
		 * @public
		 */
		EndColumnFullScreen: "EndColumnFullScreen"
	};

	sap.ui.lazyRequire("sap.f.routing.Router");
	sap.ui.lazyRequire("sap.f.routing.Target");
	sap.ui.lazyRequire("sap.f.routing.TargetHandler");
	sap.ui.lazyRequire("sap.f.routing.Targets");

	/**
	 * Used by the <code>Avatar</code> control to define which shape to use
	 *
	 * @enum {string}
	 * @public
	 * @since 1.46
	 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
	 */
	sap.f.AvatarShape = {
		/**
		 * Circle shape for the avatar
		 * @public
		 */
		Circle: "Circle",

		/**
		 * Square shape for the avatar
		 * @public
		 */
		Square: "Square"
	};

	/**
	 * Used by the <code>Avatar</code> control to define which size to use
	 *
	 * @enum {string}
	 * @public
	 * @since 1.46
	 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
	 */
	sap.f.AvatarSize = {
		/**
		 * Extra small size
		 * @public
		 */
		XS: "XS",

		/**
		 * Small size
		 * @public
		 */
		S: "S",

		/**
		 * Medium size
		 * @public
		 */
		M: "M",

		/**
		 * Large size
		 * @public
		 */
		L: "L",

		/**
		 * Extra large size
		 * @public
		 */
		XL: "XL",

		/**
		 * Custom size
		 * @public
		 */
		Custom: "Custom"
	};

	/**
	 * Used by the <code>Avatar</code> control to define it's type
	 *
	 * @enum {string}
	 * @public
	 * @since 1.46
	 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
	 */
	sap.f.AvatarType = {
		/**
		 * Type icon for the avatar
		 * @public
		 */
		Icon: "Icon",
		/**
		 * Type image for the avatar
		 * @public
		 */
		Image: "Image",
		/**
		 * Type initials for the avatar
		 * @public
		 */
		Initials: "Initials"
	};
	/**
	 * Used by the <code>Avatar</code> control to define it's image size
	 *
	 * @enum {string}
	 * @public
	 * @since 1.46
	 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
	 */
	sap.f.AvatarImageFitType = {
		/**
		 * The background image will be as large as possible, so that the background area is completely covered by the image
		 * @public
		 */
		Cover: "Cover",
		/**
		 * The background image will be scaled to the largest size such that both its width and height can fit
		 * @public
		 */
		Contain: "Contain"
	};

	return sap.f;

});
