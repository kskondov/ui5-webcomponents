import { registerIcon, registerCollectionPromise } from "../SVGIconRegistry.js";

const registerIconBundle = async (collectionName, bundleData) => {
	throw new Error("This method has been removed. Use `registerIconLoader` instead.");
};

const registerIconLoader = async (collectionName, loader) => {
	let resolveFn;
	const collectionFetched = new Promise(resolve => {
		resolveFn = resolve;
	});
	registerCollectionPromise(collectionName, collectionFetched);

	const iconData = await loader();
	fillRegistry(iconData);
	resolveFn();
}

const fillRegistry = bundleData => {
	Object.keys(bundleData.data).forEach(iconName => {
		const iconData = bundleData.data[iconName];

		registerIcon(iconName, {
			pathData: iconData.path,
			ltr: iconData.ltr,
			accData: iconData.acc,
			collection: bundleData.collection,
		 });
	});
};

export { registerIconBundle, registerIconLoader }; // eslint-disable-line
