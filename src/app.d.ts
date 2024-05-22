// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {}
		interface Platform {
			env: {
				COUNTER: DurableObjectNamespace;
				export async function post(context) {
					const counter = context.platform.env.COUNTER.idFromName("A");
				  }
			};
			context: {
				waitUntil(promise: Promise<any>): void;
			};
			caches: CacheStorage & { default: Cache }
		}
		interface Session {}
		interface Stuff {}
	}
}

export {};