import STMP from "./SMTP.vue";
import Telegram from "./Telegram.vue";
import Discord from "./Discord.vue";
import Webhook from "./Webhook.vue";
import Signal from "./Signal.vue";
import Gotify from "./Gotify.vue";
import Ntfy from "./Ntfy.vue";
import Slack from "./Slack.vue";
import RocketChat from "./RocketChat.vue";
import Teams from "./Teams.vue";
import Pushover from "./Pushover.vue";
import Pushy from "./Pushy.vue";
import TechulusPush from "./TechulusPush.vue";
import Octopush from "./Octopush.vue";
import PromoSMS from "./PromoSMS.vue";
import ClickSendSMS from "./ClickSendSMS.vue";
import LunaSea from "./LunaSea.vue";
import Feishu from "./Feishu.vue";
import Apprise from "./Apprise.vue";
import Pushbullet from "./Pushbullet.vue";
import Line from "./Line.vue";
import Mattermost from "./Mattermost.vue";
import Matrix from "./Matrix.vue";
import AliyunSMS from "./AliyunSms.vue";
import DingDing from "./DingDing.vue";
import Bark from "./Bark.vue";
import SerwerSMS from "./SerwerSMS.vue";
import Stackfield from "./Stackfield.vue";
import WeCom from "./WeCom.vue";
import GoogleChat from "./GoogleChat.vue";
import PagerDuty from "./PagerDuty.vue";
import Gorush from "./Gorush.vue";
import Alerta from "./Alerta.vue";
import OneBot from "./OneBot.vue";
import PushDeer from "./PushDeer.vue";

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
    "rocket.chat": RocketChat,
    "mattermost": Mattermost,
};

export default NotificationFormList;
