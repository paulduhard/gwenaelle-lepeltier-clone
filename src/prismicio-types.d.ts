// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Nav → Links*
 */
export interface NavDocumentDataLinksItem {
	/**
	 * Link field in *Nav → Links*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nav.links[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;

	/**
	 * Label field in *Nav → Links*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nav.links[].label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField;
}

/**
 * Content for Nav documents
 */
interface NavDocumentData {
	/**
	 * Links field in *Nav*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nav.links[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	links: prismic.GroupField<Simplify<NavDocumentDataLinksItem>>;
}

/**
 * Nav document from Prismic
 *
 * - **API ID**: `nav`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<NavDocumentData>,
	'nav',
	Lang
>;

type PageDocumentDataSlicesSlice =
	| ImageGallerySlice
	| HeroSectionSlice
	| CallToActionSlice
	| RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<PageDocumentData>,
	'page',
	Lang
>;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
	/**
	 * E-mail field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.email
	 * - **Tab**: Infos
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	email: prismic.KeyTextField;

	/**
	 * Téléphone field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.telephone
	 * - **Tab**: Infos
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	telephone: prismic.KeyTextField;

	/**
	 * Adress field in *Settings*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.adress
	 * - **Tab**: Infos
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	adress: prismic.RichTextField;

	/**
	 * GoogleMap field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.googlemap
	 * - **Tab**: Infos
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	googlemap: prismic.KeyTextField /**
	 * Logo Header field in *Settings*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.logo_header
	 * - **Tab**: Logo(s)
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */;
	logo_header: prismic.ImageField<never>;

	/**
	 * Logo Footer field in *Settings*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.logo_footer
	 * - **Tab**: Logo(s)
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	logo_footer: prismic.ImageField<never>;

	/**
	 * Logo Hero field in *Settings*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.logo_hero
	 * - **Tab**: Logo(s)
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	logo_hero: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<SettingsDocumentData>,
	'settings',
	Lang
>;

export type AllDocumentTypes = NavDocument | PageDocument | SettingsDocument;

/**
 * Primary content in *CallToAction → Items*
 */
export interface CallToActionSliceDefaultItem {
	/**
	 * Link Url field in *CallToAction → Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: call_to_action.items[].link_url
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link_url: prismic.LinkField;

	/**
	 * Link Label field in *CallToAction → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: call_to_action.items[].link_label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	link_label: prismic.KeyTextField;
}

/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
	'default',
	Record<string, never>,
	Simplify<CallToActionSliceDefaultItem>
>;

/**
 * Slice variation for *CallToAction*
 */
type CallToActionSliceVariation = CallToActionSliceDefault;

/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: CallToAction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlice = prismic.SharedSlice<'call_to_action', CallToActionSliceVariation>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSectionSliceDefaultPrimary {
	/**
	 * Title field in *Hero → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero_section.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.RichTextField;

	/**
	 * Description field in *Hero → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero_section.primary.description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;
}

/**
 * InnerPageHero variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<HeroSectionSliceDefaultPrimary>,
	never
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSectionSliceHomepageHeroPrimary {
	/**
	 * Logo field in *Hero → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero_section.primary.logo
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	logo: prismic.ImageField<never>;

	/**
	 * Description field in *Hero → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero_section.primary.description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;

	/**
	 * Image field in *Hero → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero_section.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Copyright field in *Hero → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero_section.primary.copyright
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	copyright: prismic.KeyTextField;
}

/**
 * HomePageHero variation for Hero Slice
 *
 * - **API ID**: `homepageHero`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSliceHomepageHero = prismic.SharedSliceVariation<
	'homepageHero',
	Simplify<HeroSectionSliceHomepageHeroPrimary>,
	never
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSectionSliceContactPageHeroPrimary {
	/**
	 * Logo field in *Hero → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero_section.primary.logo
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	logo: prismic.ImageField<never>;

	/**
	 * Description field in *Hero → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero_section.primary.description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;

	/**
	 * Image field in *Hero → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero_section.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Copyright field in *Hero → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero_section.primary.copyright
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	copyright: prismic.KeyTextField;
}

/**
 * Primary content in *Hero → Items*
 */
export interface HeroSectionSliceContactPageHeroItem {
	/**
	 * Link Url field in *Hero → Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero_section.items[].link_url
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link_url: prismic.LinkField;

	/**
	 * Link Label field in *Hero → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero_section.items[].link_label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	link_label: prismic.KeyTextField;
}

/**
 * ContactPageHero variation for Hero Slice
 *
 * - **API ID**: `contactPageHero`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSliceContactPageHero = prismic.SharedSliceVariation<
	'contactPageHero',
	Simplify<HeroSectionSliceContactPageHeroPrimary>,
	Simplify<HeroSectionSliceContactPageHeroItem>
>;

/**
 * Slice variation for *Hero*
 */
type HeroSectionSliceVariation =
	| HeroSectionSliceDefault
	| HeroSectionSliceHomepageHero
	| HeroSectionSliceContactPageHero;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero_section`
 * - **Description**: HeroSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSlice = prismic.SharedSlice<'hero_section', HeroSectionSliceVariation>;

/**
 * Primary content in *ImageGallery → Primary*
 */
export interface ImageGallerySliceDefaultPrimary {
	/**
	 * Image field in *ImageGallery → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_gallery.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Copyright field in *ImageGallery → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_gallery.primary.copyright
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	copyright: prismic.KeyTextField;
}

/**
 * Default variation for ImageGallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageGallerySliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ImageGallerySliceDefaultPrimary>,
	never
>;

/**
 * Primary content in *ImageGallery → Primary*
 */
export interface ImageGallerySlice2XPrimary {
	/**
	 * Image field in *ImageGallery → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_gallery.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Image field in *ImageGallery → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_gallery.primary.image2
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image2: prismic.ImageField<never>;

	/**
	 * Copyright field in *ImageGallery → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_gallery.primary.copyright
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	copyright: prismic.KeyTextField;
}

/**
 * 2x variation for ImageGallery Slice
 *
 * - **API ID**: `2X`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageGallerySlice2X = prismic.SharedSliceVariation<
	'2X',
	Simplify<ImageGallerySlice2XPrimary>,
	never
>;

/**
 * Primary content in *ImageGallery → Primary*
 */
export interface ImageGallerySlice3XPrimary {
	/**
	 * Image field in *ImageGallery → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_gallery.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Image field in *ImageGallery → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_gallery.primary.image2
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image2: prismic.ImageField<never>;

	/**
	 * Image3 field in *ImageGallery → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_gallery.primary.image3
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image3: prismic.ImageField<never>;

	/**
	 * Copyright field in *ImageGallery → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_gallery.primary.copyright
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	copyright: prismic.KeyTextField;
}

/**
 * 3x variation for ImageGallery Slice
 *
 * - **API ID**: `3X`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageGallerySlice3X = prismic.SharedSliceVariation<
	'3X',
	Simplify<ImageGallerySlice3XPrimary>,
	never
>;

/**
 * Primary content in *ImageGallery → Primary*
 */
export interface ImageGallerySlice4XPrimary {
	/**
	 * Image field in *ImageGallery → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_gallery.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Image field in *ImageGallery → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_gallery.primary.image2
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image2: prismic.ImageField<never>;

	/**
	 * Image3 field in *ImageGallery → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_gallery.primary.image3
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image3: prismic.ImageField<never>;

	/**
	 * Image4 field in *ImageGallery → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_gallery.primary.image4
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image4: prismic.ImageField<never>;

	/**
	 * Copyright field in *ImageGallery → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_gallery.primary.copyright
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	copyright: prismic.KeyTextField;
}

/**
 * 4x variation for ImageGallery Slice
 *
 * - **API ID**: `4X`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageGallerySlice4X = prismic.SharedSliceVariation<
	'4X',
	Simplify<ImageGallerySlice4XPrimary>,
	never
>;

/**
 * Slice variation for *ImageGallery*
 */
type ImageGallerySliceVariation =
	| ImageGallerySliceDefault
	| ImageGallerySlice2X
	| ImageGallerySlice3X
	| ImageGallerySlice4X;

/**
 * ImageGallery Shared Slice
 *
 * - **API ID**: `image_gallery`
 * - **Description**: ImageGallery
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageGallerySlice = prismic.SharedSlice<'image_gallery', ImageGallerySliceVariation>;

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceDefaultPrimary {
	/**
	 * Title field in *RichText → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: rich_text.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Content field in *RichText → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Lorem ipsum...
	 * - **API ID Path**: rich_text.primary.content
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	content: prismic.RichTextField;

	/**
	 * Two Columns field in *RichText → Primary*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: rich_text.primary.two_columns
	 * - **Documentation**: https://prismic.io/docs/field#boolean
	 */
	two_columns: prismic.BooleanField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<RichTextSliceDefaultPrimary>,
	never
>;

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceTextOnlyPrimary {
	/**
	 * Content field in *RichText → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Lorem ipsum...
	 * - **API ID Path**: rich_text.primary.content
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	content: prismic.RichTextField;
}

/**
 * textOnly variation for RichText Slice
 *
 * - **API ID**: `textOnly`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceTextOnly = prismic.SharedSliceVariation<
	'textOnly',
	Simplify<RichTextSliceTextOnlyPrimary>,
	never
>;

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceTextLeftPrimary {
	/**
	 * Content field in *RichText → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Lorem ipsum...
	 * - **API ID Path**: rich_text.primary.content
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	content: prismic.RichTextField;
}

/**
 * textLeft variation for RichText Slice
 *
 * - **API ID**: `textLeft`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceTextLeft = prismic.SharedSliceVariation<
	'textLeft',
	Simplify<RichTextSliceTextLeftPrimary>,
	never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault | RichTextSliceTextOnly | RichTextSliceTextLeft;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<'rich_text', RichTextSliceVariation>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			NavDocument,
			NavDocumentData,
			NavDocumentDataLinksItem,
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			SettingsDocument,
			SettingsDocumentData,
			AllDocumentTypes,
			CallToActionSlice,
			CallToActionSliceDefaultItem,
			CallToActionSliceVariation,
			CallToActionSliceDefault,
			HeroSectionSlice,
			HeroSectionSliceDefaultPrimary,
			HeroSectionSliceHomepageHeroPrimary,
			HeroSectionSliceContactPageHeroPrimary,
			HeroSectionSliceContactPageHeroItem,
			HeroSectionSliceVariation,
			HeroSectionSliceDefault,
			HeroSectionSliceHomepageHero,
			HeroSectionSliceContactPageHero,
			ImageGallerySlice,
			ImageGallerySliceDefaultPrimary,
			ImageGallerySlice2XPrimary,
			ImageGallerySlice3XPrimary,
			ImageGallerySlice4XPrimary,
			ImageGallerySliceVariation,
			ImageGallerySliceDefault,
			ImageGallerySlice2X,
			ImageGallerySlice3X,
			ImageGallerySlice4X,
			RichTextSlice,
			RichTextSliceDefaultPrimary,
			RichTextSliceTextOnlyPrimary,
			RichTextSliceTextLeftPrimary,
			RichTextSliceVariation,
			RichTextSliceDefault,
			RichTextSliceTextOnly,
			RichTextSliceTextLeft
		};
	}
}
