import {EmitterWebhookEvent, EmitterWebhookEventName} from "@octokit/webhooks/dist-types/types";
import fixtures from '@octokit/webhooks-definitions/index.json'

/**
 * Returns an example GitHub webhooks payload fixture of the specified type
 * @param eventName the name of the specific event, which has the event type and the event action,
 * such as `installation.created`
 */
export function getFixture<E extends EmitterWebhookEventName>(eventName: E): EmitterWebhookEvent<E>['payload'] | undefined {
    const [name, action] = eventName.split('.');
    if (!name) {
        return undefined;
    }

    const event = fixtures.find(f => f.name === name);
    if (!event) {
        return undefined;
    }

    const examples = event.examples as any[];
    return action ? examples.find(e => e.action === action) : examples[0];
}
