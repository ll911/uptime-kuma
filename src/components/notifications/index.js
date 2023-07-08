import Gotify from "./Gotify.vue";
import Mattermost from "./Mattermost.vue";
import Ntfy from "./Ntfy.vue";
import RocketChat from "./RocketChat.vue";
import Slack from "./Slack.vue";
import Splunk from "./Splunk.vue";
import STMP from "./SMTP.vue";
import Teams from "./Teams.vue";
import Webhook from "./Webhook.vue";

/**
 * Manage all notification form.
 *
 * @type { Record<string, any> }
 */
const NotificationFormList = {
    "webhook": Webhook,
    "smtp": STMP,
    "teams": Teams,
    "gotify": Gotify,
    "ntfy": Ntfy,
    "slack": Slack,
    "splunk": Splunk,
    "rocket.chat": RocketChat,
    "mattermost": Mattermost,
};

export default NotificationFormList;
