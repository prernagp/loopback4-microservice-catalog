// generated by cdktf get
// cloudposse/elasticache-redis/aws
import {TerraformModule, TerraformModuleUserConfig} from 'cdktf';
import {Construct} from 'constructs';
export interface RedisConfig extends TerraformModuleUserConfig {
  /**
   * A list of Security Group rule objects to add to the created security group, in addition to the ones
this module normally creates. (To suppress the module's rules, set `create_security_group` to false
and supply your own security group via `associated_security_group_ids`.)
The keys and values of the objects are fully compatible with the `aws_security_group_rule` resource, except
for `security_group_id` which will be ignored, and the optional "key" which, if provided, must be unique and known at "plan" time.
To get more info see https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group_rule .

   * @default 
   */
  readonly additionalSecurityGroupRules?: any[];
  /**
   * Additional key-value pairs to add to each map in `tags_as_list_of_maps`. Not added to `tags` or `id`.
This is for some rare cases where resources want additional configuration of tags
and therefore take a list of maps with tag key, value, and additional configuration.

   * @default [object Object]
   * The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}
   */
  readonly additionalTagMap?: {[key: string]: string};
  /**
   * Alarm action list
   * @default
   */
  readonly alarmActions?: string[];
  /**
   * CPU threshold alarm level
   * @default 75
   */
  readonly alarmCpuThresholdPercent?: number;
  /**
   * Ram threshold alarm level
   * @default 10000000
   */
  readonly alarmMemoryThresholdBytes?: number;
  /**
   * If `true`, the created security group will allow egress on all ports and protocols to all IP address.
If this is false and no egress rules are otherwise specified, then no egress will be allowed.
Defaults to `true` unless the deprecated `egress_cidr_blocks` is provided and is not `["0.0.0.0/0"]`, in which case defaults to `false`.

   */
  readonly allowAllEgress?: boolean;
  /**
   * DEPRECATED: Use `additional_security_group_rules` instead.
Historical description: List of CIDR blocks that are allowed ingress to the cluster's Security Group created in the module

   * @default 
   */
  readonly allowedCidrBlocks?: string[];
  /**
   * A list of IDs of Security Groups to allow access to the security group created by this module.

   * @default 
   */
  readonly allowedSecurityGroupIds?: string[];
  /**
   * DEPRECATED: Use `allowed_security_group_ids` instead.

   * @default 
   */
  readonly allowedSecurityGroups?: string[];
  /**
   * Apply changes immediately
   * @default true
   */
  readonly applyImmediately?: boolean;
  /**
   * A list of IDs of Security Groups to associate the created resource with, in addition to the created security group.
These security groups will not be modified and, if `create_security_group` is `false`, must provide all the required access.

   * @default 
   */
  readonly associatedSecurityGroupIds?: string[];
  /**
   * Enable encryption at rest
   */
  readonly atRestEncryptionEnabled?: boolean;
  /**
   * ID element. Additional attributes (e.g. `workers` or `cluster`) to add to `id`,
in the order they appear in the list. New attributes are appended to the
end of the list. The elements of the list are joined by the `delimiter`
and treated as a single ID element.

   * @default 
   */
  readonly attributes?: string[];
  /**
   * Auth token for password protecting redis, `transit_encryption_enabled` must be set to `true`. Password must be longer than 16 chars
   */
  readonly authToken?: string;
  /**
   * Specifies whether minor version engine upgrades will be applied automatically to the underlying Cache Cluster instances during the maintenance window. Only supported if the engine version is 6 or higher.
   */
  readonly autoMinorVersionUpgrade?: boolean;
  /**
   * Automatic failover (Not available for T1/T2 instances)
   */
  readonly automaticFailoverEnabled?: boolean;
  /**
   * Availability zone IDs
   * @default
   */
  readonly availabilityZones?: string[];
  /**
   * Boolean flag to enable/disable CloudWatch metrics alarms
   */
  readonly cloudwatchMetricAlarmsEnabled?: boolean;
  /**
   * Flag to enable/disable creation of a native redis cluster. `automatic_failover_enabled` must be set to `true`. Only 1 `cluster_mode` block is allowed
   */
  readonly clusterModeEnabled?: boolean;
  /**
   * Number of node groups (shards) for this Redis replication group. Changing this number will trigger an online resizing operation before other settings modifications
   */
  readonly clusterModeNumNodeGroups?: number;
  /**
   * Number of replica nodes in each node group. Valid values are 0 to 5. Changing this number will force a new resource
   */
  readonly clusterModeReplicasPerNodeGroup?: number;
  /**
   * Number of nodes in cluster. *Ignored when `cluster_mode_enabled` == `true`*
   * @default 1
   */
  readonly clusterSize?: number;
  /**
   * Single object for setting entire context at once.
See description of individual variables for details.
Leave string and numeric variables as `null` to use default value.
Individual variable settings (non-null) override settings in context object,
except for attributes, tags, and additional_tag_map, which are merged.

   * @default [object Object]
   */
  readonly context?: any;
  /**
   * Set `true` to create and configure a new security group. If false, `associated_security_group_ids` must be provided.
   * @default true
   */
  readonly createSecurityGroup?: boolean;
  /**
   * Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type.
   */
  readonly dataTieringEnabled?: boolean;
  /**
   * Delimiter to be used between ID elements.
Defaults to `-` (hyphen). Set to `""` to use no delimiter at all.

   */
  readonly delimiter?: string;
  /**
   * Description of elasticache replication group
   */
  readonly description?: string;
  /**
   * Describe additional descriptors to be output in the `descriptors` output map.
Map of maps. Keys are names of descriptors. Values are maps of the form
`{
   format = string
   labels = list(string)
}`
(Type is `any` so the map values can later be enhanced to provide additional options.)
`format` is a Terraform format string to be passed to the `format()` function.
`labels` is a list of labels, in order, to pass to `format()` function.
Label values will be normalized before being passed to `format()` so they will be
identical to how they appear in `id`.
Default is `{}` (`descriptors` output will be empty).

   * @default [object Object]
   */
  readonly descriptorFormats?: any;
  /**
   * The subdomain to use for the CNAME record. If not provided then the CNAME record will use var.name.
   */
  readonly dnsSubdomain?: string;
  /**
   * DEPRECATED: Use `allow_all_egress` and `additional_security_group_rules` instead.
Historical description: Outbound traffic address.
Historical default: ["0.0.0.0/0"]

   */
  readonly egressCidrBlocks?: any[];
  /**
   * Subnet group name for the ElastiCache instance
   */
  readonly elasticacheSubnetGroupName?: string;
  /**
   * Set to false to prevent the module from creating any resources
   */
  readonly enabled?: boolean;
  /**
   * Redis engine version
   * @default 4.0.10
   */
  readonly engineVersion?: string;
  /**
   * ID element. Usually used for region e.g. 'uw2', 'us-west-2', OR role 'prod', 'staging', 'dev', 'UAT'
   */
  readonly environment?: string;
  /**
   * DEPRECATED: Use `associated_security_group_ids` instead.
Historical description: List of existing Security Group IDs to place the cluster into.
Set `use_existing_security_groups` to `true` to enable using `existing_security_groups` as Security Groups for the cluster.

   * @default 
   */
  readonly existingSecurityGroups?: string[];
  /**
   * Redis family
   * @default redis4.0
   */
  readonly family?: string;
  /**
   * The name of your final node group (shard) snapshot. ElastiCache creates the snapshot from the primary node in the cluster. If omitted, no final snapshot will be made.
   */
  readonly finalSnapshotIdentifier?: string;
  /**
   * Limit `id` to this many characters (minimum 6).
Set to `0` for unlimited length.
Set to `null` for keep the existing setting, which defaults to `0`.
Does not affect `id_full`.

   */
  readonly idLengthLimit?: number;
  /**
   * Elastic cache instance type
   * @default cache.t2.micro
   */
  readonly instanceType?: string;
  /**
   * The ARN of the key that you wish to use if encrypting at rest. If not supplied, uses service managed encryption. `at_rest_encryption_enabled` must be set to `true`
   */
  readonly kmsKeyId?: string;
  /**
   * Controls the letter case of the `tags` keys (label names) for tags generated by this module.
Does not affect keys of tags passed in via the `tags` input.
Possible values: `lower`, `title`, `upper`.
Default value: `title`.

   */
  readonly labelKeyCase?: string;
  /**
   * The order in which the labels (ID elements) appear in the `id`.
Defaults to ["namespace", "environment", "stage", "name", "attributes"].
You can omit any of the 6 labels ("tenant" is the 6th), but at least one must be present.

   */
  readonly labelOrder?: string[];
  /**
   * Controls the letter case of ID elements (labels) as included in `id`,
set as tag values, and output by this module individually.
Does not affect values of tags passed in via the `tags` input.
Possible values: `lower`, `title`, `upper` and `none` (no transformation).
Set this to `title` and set `delimiter` to `""` to yield Pascal Case IDs.
Default value: `lower`.

   */
  readonly labelValueCase?: string;
  /**
   * Set of labels (ID elements) to include as tags in the `tags` output.
Default is to include all labels.
Tags with empty values will not be included in the `tags` output.
Set to `[]` to suppress all generated tags.
**Notes:**
  The value of the `name` tag, if included, will be the `id`, not the `name`.
  Unlike other `null-label` inputs, the initial setting of `labels_as_tags` cannot be
  changed in later chained modules. Attempts to change it will be silently ignored.

   * @default default
   */
  readonly labelsAsTags?: string[];
  /**
   * The log_delivery_configuration block allows the streaming of Redis SLOWLOG or Redis Engine Log to CloudWatch Logs or Kinesis Data Firehose. Max of 2 blocks.
   * @default
   * The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}
   */
  readonly logDeliveryConfiguration?: {[key: string]: any}[];
  /**
   * Maintenance window
   * @default wed:03:00-wed:04:00
   */
  readonly maintenanceWindow?: string;
  /**
   * Multi AZ (Automatic Failover must also be enabled.  If Cluster Mode is enabled, Multi AZ is on by default, and this setting is ignored)
   */
  readonly multiAzEnabled?: boolean;
  /**
   * ID element. Usually the component or solution name, e.g. 'app' or 'jenkins'.
This is the only ID element not also included as a `tag`.
The "name" tag is set to the full `id` string. There is no tag with the value of the `name` input.

   */
  readonly name?: string;
  /**
   * ID element. Usually an abbreviation of your organization name, e.g. 'eg' or 'cp', to help ensure generated IDs are globally unique
   */
  readonly namespace?: string;
  /**
   * Notification topic arn
   */
  readonly notificationTopicArn?: string;
  /**
   * The list of actions to execute when this alarm transitions into an OK state from any other state. Each action is specified as an Amazon Resource Number (ARN)
   * @default
   */
  readonly okActions?: string[];
  /**
   * A list of Redis parameters to apply. Note that parameters may differ from one Redis family to another
   * @default
   */
  readonly parameter?: any;
  /**
   * Managed by Terraform
   */
  readonly parameterGroupDescription?: string;
  /**
   * Redis port
   * @default 6379
   */
  readonly port?: number;
  /**
   * Terraform regular expression (regex) string.
Characters matching the regex will be removed from the ID elements.
If not set, `"/[^a-zA-Z0-9-]/"` is used to remove all characters other than hyphens, letters and digits.

   */
  readonly regexReplaceChars?: string;
  /**
   * Replication group ID with the following constraints: 
A name must contain from 1 to 20 alphanumeric characters or hyphens. 
 The first character must be a letter. 
 A name cannot end with a hyphen or contain two consecutive hyphens.
   */
  readonly replicationGroupId?: string;
  /**
   * Set `true` to enable Terraform `create_before_destroy` behavior on the created security group.
We only recommend setting this `false` if you are upgrading this module and need to keep
the existing security group from being replaced.
Note that changing this value will always cause the security group to be replaced.

   * @default true
   */
  readonly securityGroupCreateBeforeDestroy?: boolean;
  /**
   * How long to wait for the security group to be created.
   * @default 10m
   */
  readonly securityGroupCreateTimeout?: string;
  /**
   * How long to retry on `DependencyViolation` errors during security group deletion.

   * @default 15m
   */
  readonly securityGroupDeleteTimeout?: string;
  /**
   * The description to assign to the created Security Group.
Warning: Changing the description causes the security group to be replaced.
Set this to `null` to maintain parity with releases <= `0.34.0`.

   * @default Security group for Elasticache Redis
   */
  readonly securityGroupDescription?: string;
  /**
   * The name to assign to the created security group. Must be unique within the VPC.
If not provided, will be derived from the `null-label.context` passed in.
If `create_before_destroy` is true, will be used as a name prefix.

   * @default 
   */
  readonly securityGroupName?: string[];
  /**
   * A single-element string list containing an Amazon Resource Name (ARN) of a Redis RDB snapshot file stored in Amazon S3. Example: arn:aws:s3:::my_bucket/snapshot1.rdb
   * @default
   */
  readonly snapshotArns?: string[];
  /**
   * The name of a snapshot from which to restore data into the new node group. Changing the snapshot_name forces a new resource.
   */
  readonly snapshotName?: string;
  /**
   * The number of days for which ElastiCache will retain automatic cache cluster snapshots before deleting them.
   */
  readonly snapshotRetentionLimit?: number;
  /**
   * The daily time range (in UTC) during which ElastiCache will begin taking a daily snapshot of your cache cluster.
   * @default 06:30-07:30
   */
  readonly snapshotWindow?: string;
  /**
   * ID element. Usually used to indicate role, e.g. 'prod', 'staging', 'source', 'build', 'test', 'deploy', 'release'
   */
  readonly stage?: string;
  /**
   * Subnet IDs
   * @default
   */
  readonly subnets?: string[];
  /**
   * Additional tags (e.g. `{'BusinessUnit': 'XYZ'}`).
Neither the tag keys nor the tag values will be modified by this module.

   * @default [object Object]
   * The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}
   */
  readonly tags?: {[key: string]: string};
  /**
   * ID element _(Rarely used, not included by default)_. A customer identifier, indicating who this instance of a resource is for
   */
  readonly tenant?: string;
  /**
   * Set `true` to enable encryption in transit. Forced `true` if `var.auth_token` is set.
If this is enabled, use the [following guide](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/in-transit-encryption.html#connect-tls) to access redis.

   * @default true
   */
  readonly transitEncryptionEnabled?: boolean;
  /**
   * DEPRECATED: Use `create_security_group` instead.
Historical description: Flag to enable/disable creation of Security Group in the module.
Set to `true` to disable Security Group creation and provide a list of existing security Group IDs in `existing_security_groups` to place the cluster into.
Historical default: `false`

   */
  readonly useExistingSecurityGroups?: boolean;
  /**
   * User Group ID to associate with the replication group
   */
  readonly userGroupIds?: string[];
  /**
   * VPC ID
   */
  readonly vpcId: string;
  /**
   * Route53 DNS Zone ID as list of string (0 or 1 items). If empty, no custom DNS name will be published.
If the list contains a single Zone ID, a custom DNS name will be pulished in that zone.
Can also be a plain string, but that use is DEPRECATED because of Terraform issues.

   * @default 
   */
  readonly zoneId?: any;
}
export class Redis extends TerraformModule {
  private readonly inputs: {[name: string]: any} = {};
  public constructor(scope: Construct, id: string, config: RedisConfig) {
    super(scope, id, {
      ...config,
      source: 'cloudposse/elasticache-redis/aws',
    });
    this.additionalSecurityGroupRules = config.additionalSecurityGroupRules;
    this.additionalTagMap = config.additionalTagMap;
    this.alarmActions = config.alarmActions;
    this.alarmCpuThresholdPercent = config.alarmCpuThresholdPercent;
    this.alarmMemoryThresholdBytes = config.alarmMemoryThresholdBytes;
    this.allowAllEgress = config.allowAllEgress;
    this.allowedCidrBlocks = config.allowedCidrBlocks;
    this.allowedSecurityGroupIds = config.allowedSecurityGroupIds;
    this.allowedSecurityGroups = config.allowedSecurityGroups;
    this.applyImmediately = config.applyImmediately;
    this.associatedSecurityGroupIds = config.associatedSecurityGroupIds;
    this.atRestEncryptionEnabled = config.atRestEncryptionEnabled;
    this.attributes = config.attributes;
    this.authToken = config.authToken;
    this.autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
    this.automaticFailoverEnabled = config.automaticFailoverEnabled;
    this.availabilityZones = config.availabilityZones;
    this.cloudwatchMetricAlarmsEnabled = config.cloudwatchMetricAlarmsEnabled;
    this.clusterModeEnabled = config.clusterModeEnabled;
    this.clusterModeNumNodeGroups = config.clusterModeNumNodeGroups;
    this.clusterModeReplicasPerNodeGroup =
      config.clusterModeReplicasPerNodeGroup;
    this.clusterSize = config.clusterSize;
    this.context = config.context;
    this.createSecurityGroup = config.createSecurityGroup;
    this.dataTieringEnabled = config.dataTieringEnabled;
    this.delimiter = config.delimiter;
    this.description = config.description;
    this.descriptorFormats = config.descriptorFormats;
    this.dnsSubdomain = config.dnsSubdomain;
    this.egressCidrBlocks = config.egressCidrBlocks;
    this.elasticacheSubnetGroupName = config.elasticacheSubnetGroupName;
    this.enabled = config.enabled;
    this.engineVersion = config.engineVersion;
    this.environment = config.environment;
    this.existingSecurityGroups = config.existingSecurityGroups;
    this.family = config.family;
    this.finalSnapshotIdentifier = config.finalSnapshotIdentifier;
    this.idLengthLimit = config.idLengthLimit;
    this.instanceType = config.instanceType;
    this.kmsKeyId = config.kmsKeyId;
    this.labelKeyCase = config.labelKeyCase;
    this.labelOrder = config.labelOrder;
    this.labelValueCase = config.labelValueCase;
    this.labelsAsTags = config.labelsAsTags;
    this.logDeliveryConfiguration = config.logDeliveryConfiguration;
    this.maintenanceWindow = config.maintenanceWindow;
    this.multiAzEnabled = config.multiAzEnabled;
    this.name = config.name;
    this.namespace = config.namespace;
    this.notificationTopicArn = config.notificationTopicArn;
    this.okActions = config.okActions;
    this.parameter = config.parameter;
    this.parameterGroupDescription = config.parameterGroupDescription;
    this.port = config.port;
    this.regexReplaceChars = config.regexReplaceChars;
    this.replicationGroupId = config.replicationGroupId;
    this.securityGroupCreateBeforeDestroy =
      config.securityGroupCreateBeforeDestroy;
    this.securityGroupCreateTimeout = config.securityGroupCreateTimeout;
    this.securityGroupDeleteTimeout = config.securityGroupDeleteTimeout;
    this.securityGroupDescription = config.securityGroupDescription;
    this.securityGroupName = config.securityGroupName;
    this.snapshotArns = config.snapshotArns;
    this.snapshotName = config.snapshotName;
    this.snapshotRetentionLimit = config.snapshotRetentionLimit;
    this.snapshotWindow = config.snapshotWindow;
    this.stage = config.stage;
    this.subnets = config.subnets;
    this.tags = config.tags;
    this.tenant = config.tenant;
    this.transitEncryptionEnabled = config.transitEncryptionEnabled;
    this.useExistingSecurityGroups = config.useExistingSecurityGroups;
    this.userGroupIds = config.userGroupIds;
    this.vpcId = config.vpcId;
    this.zoneId = config.zoneId;
  }
  public get additionalSecurityGroupRules(): any[] | undefined {
    return this.inputs['additional_security_group_rules'] as any[] | undefined;
  }
  public set additionalSecurityGroupRules(value: any[] | undefined) {
    this.inputs['additional_security_group_rules'] = value;
  }
  public get additionalTagMap(): {[key: string]: string} | undefined {
    return this.inputs['additional_tag_map'] as
      | {[key: string]: string}
      | undefined;
  }
  public set additionalTagMap(value: {[key: string]: string} | undefined) {
    this.inputs['additional_tag_map'] = value;
  }
  public get alarmActions(): string[] | undefined {
    return this.inputs['alarm_actions'] as string[] | undefined;
  }
  public set alarmActions(value: string[] | undefined) {
    this.inputs['alarm_actions'] = value;
  }
  public get alarmCpuThresholdPercent(): number | undefined {
    return this.inputs['alarm_cpu_threshold_percent'] as number | undefined;
  }
  public set alarmCpuThresholdPercent(value: number | undefined) {
    this.inputs['alarm_cpu_threshold_percent'] = value;
  }
  public get alarmMemoryThresholdBytes(): number | undefined {
    return this.inputs['alarm_memory_threshold_bytes'] as number | undefined;
  }
  public set alarmMemoryThresholdBytes(value: number | undefined) {
    this.inputs['alarm_memory_threshold_bytes'] = value;
  }
  public get allowAllEgress(): boolean | undefined {
    return this.inputs['allow_all_egress'] as boolean | undefined;
  }
  public set allowAllEgress(value: boolean | undefined) {
    this.inputs['allow_all_egress'] = value;
  }
  public get allowedCidrBlocks(): string[] | undefined {
    return this.inputs['allowed_cidr_blocks'] as string[] | undefined;
  }
  public set allowedCidrBlocks(value: string[] | undefined) {
    this.inputs['allowed_cidr_blocks'] = value;
  }
  public get allowedSecurityGroupIds(): string[] | undefined {
    return this.inputs['allowed_security_group_ids'] as string[] | undefined;
  }
  public set allowedSecurityGroupIds(value: string[] | undefined) {
    this.inputs['allowed_security_group_ids'] = value;
  }
  public get allowedSecurityGroups(): string[] | undefined {
    return this.inputs['allowed_security_groups'] as string[] | undefined;
  }
  public set allowedSecurityGroups(value: string[] | undefined) {
    this.inputs['allowed_security_groups'] = value;
  }
  public get applyImmediately(): boolean | undefined {
    return this.inputs['apply_immediately'] as boolean | undefined;
  }
  public set applyImmediately(value: boolean | undefined) {
    this.inputs['apply_immediately'] = value;
  }
  public get associatedSecurityGroupIds(): string[] | undefined {
    return this.inputs['associated_security_group_ids'] as string[] | undefined;
  }
  public set associatedSecurityGroupIds(value: string[] | undefined) {
    this.inputs['associated_security_group_ids'] = value;
  }
  public get atRestEncryptionEnabled(): boolean | undefined {
    return this.inputs['at_rest_encryption_enabled'] as boolean | undefined;
  }
  public set atRestEncryptionEnabled(value: boolean | undefined) {
    this.inputs['at_rest_encryption_enabled'] = value;
  }
  public get attributes(): string[] | undefined {
    return this.inputs['attributes'] as string[] | undefined;
  }
  public set attributes(value: string[] | undefined) {
    this.inputs['attributes'] = value;
  }
  public get authToken(): string | undefined {
    return this.inputs['auth_token'] as string | undefined;
  }
  public set authToken(value: string | undefined) {
    this.inputs['auth_token'] = value;
  }
  public get autoMinorVersionUpgrade(): boolean | undefined {
    return this.inputs['auto_minor_version_upgrade'] as boolean | undefined;
  }
  public set autoMinorVersionUpgrade(value: boolean | undefined) {
    this.inputs['auto_minor_version_upgrade'] = value;
  }
  public get automaticFailoverEnabled(): boolean | undefined {
    return this.inputs['automatic_failover_enabled'] as boolean | undefined;
  }
  public set automaticFailoverEnabled(value: boolean | undefined) {
    this.inputs['automatic_failover_enabled'] = value;
  }
  public get availabilityZones(): string[] | undefined {
    return this.inputs['availability_zones'] as string[] | undefined;
  }
  public set availabilityZones(value: string[] | undefined) {
    this.inputs['availability_zones'] = value;
  }
  public get cloudwatchMetricAlarmsEnabled(): boolean | undefined {
    return this.inputs['cloudwatch_metric_alarms_enabled'] as
      | boolean
      | undefined;
  }
  public set cloudwatchMetricAlarmsEnabled(value: boolean | undefined) {
    this.inputs['cloudwatch_metric_alarms_enabled'] = value;
  }
  public get clusterModeEnabled(): boolean | undefined {
    return this.inputs['cluster_mode_enabled'] as boolean | undefined;
  }
  public set clusterModeEnabled(value: boolean | undefined) {
    this.inputs['cluster_mode_enabled'] = value;
  }
  public get clusterModeNumNodeGroups(): number | undefined {
    return this.inputs['cluster_mode_num_node_groups'] as number | undefined;
  }
  public set clusterModeNumNodeGroups(value: number | undefined) {
    this.inputs['cluster_mode_num_node_groups'] = value;
  }
  public get clusterModeReplicasPerNodeGroup(): number | undefined {
    return this.inputs['cluster_mode_replicas_per_node_group'] as
      | number
      | undefined;
  }
  public set clusterModeReplicasPerNodeGroup(value: number | undefined) {
    this.inputs['cluster_mode_replicas_per_node_group'] = value;
  }
  public get clusterSize(): number | undefined {
    return this.inputs['cluster_size'] as number | undefined;
  }
  public set clusterSize(value: number | undefined) {
    this.inputs['cluster_size'] = value;
  }
  public get context(): any | undefined {
    return this.inputs['context'] as any | undefined;
  }
  public set context(value: any | undefined) {
    this.inputs['context'] = value;
  }
  public get createSecurityGroup(): boolean | undefined {
    return this.inputs['create_security_group'] as boolean | undefined;
  }
  public set createSecurityGroup(value: boolean | undefined) {
    this.inputs['create_security_group'] = value;
  }
  public get dataTieringEnabled(): boolean | undefined {
    return this.inputs['data_tiering_enabled'] as boolean | undefined;
  }
  public set dataTieringEnabled(value: boolean | undefined) {
    this.inputs['data_tiering_enabled'] = value;
  }
  public get delimiter(): string | undefined {
    return this.inputs['delimiter'] as string | undefined;
  }
  public set delimiter(value: string | undefined) {
    this.inputs['delimiter'] = value;
  }
  public get description(): string | undefined {
    return this.inputs['description'] as string | undefined;
  }
  public set description(value: string | undefined) {
    this.inputs['description'] = value;
  }
  public get descriptorFormats(): any | undefined {
    return this.inputs['descriptor_formats'] as any | undefined;
  }
  public set descriptorFormats(value: any | undefined) {
    this.inputs['descriptor_formats'] = value;
  }
  public get dnsSubdomain(): string | undefined {
    return this.inputs['dns_subdomain'] as string | undefined;
  }
  public set dnsSubdomain(value: string | undefined) {
    this.inputs['dns_subdomain'] = value;
  }
  public get egressCidrBlocks(): any[] | undefined {
    return this.inputs['egress_cidr_blocks'] as any[] | undefined;
  }
  public set egressCidrBlocks(value: any[] | undefined) {
    this.inputs['egress_cidr_blocks'] = value;
  }
  public get elasticacheSubnetGroupName(): string | undefined {
    return this.inputs['elasticache_subnet_group_name'] as string | undefined;
  }
  public set elasticacheSubnetGroupName(value: string | undefined) {
    this.inputs['elasticache_subnet_group_name'] = value;
  }
  public get enabled(): boolean | undefined {
    return this.inputs['enabled'] as boolean | undefined;
  }
  public set enabled(value: boolean | undefined) {
    this.inputs['enabled'] = value;
  }
  public get engineVersion(): string | undefined {
    return this.inputs['engine_version'] as string | undefined;
  }
  public set engineVersion(value: string | undefined) {
    this.inputs['engine_version'] = value;
  }
  public get environment(): string | undefined {
    return this.inputs['environment'] as string | undefined;
  }
  public set environment(value: string | undefined) {
    this.inputs['environment'] = value;
  }
  public get existingSecurityGroups(): string[] | undefined {
    return this.inputs['existing_security_groups'] as string[] | undefined;
  }
  public set existingSecurityGroups(value: string[] | undefined) {
    this.inputs['existing_security_groups'] = value;
  }
  public get family(): string | undefined {
    return this.inputs['family'] as string | undefined;
  }
  public set family(value: string | undefined) {
    this.inputs['family'] = value;
  }
  public get finalSnapshotIdentifier(): string | undefined {
    return this.inputs['final_snapshot_identifier'] as string | undefined;
  }
  public set finalSnapshotIdentifier(value: string | undefined) {
    this.inputs['final_snapshot_identifier'] = value;
  }
  public get idLengthLimit(): number | undefined {
    return this.inputs['id_length_limit'] as number | undefined;
  }
  public set idLengthLimit(value: number | undefined) {
    this.inputs['id_length_limit'] = value;
  }
  public get instanceType(): string | undefined {
    return this.inputs['instance_type'] as string | undefined;
  }
  public set instanceType(value: string | undefined) {
    this.inputs['instance_type'] = value;
  }
  public get kmsKeyId(): string | undefined {
    return this.inputs['kms_key_id'] as string | undefined;
  }
  public set kmsKeyId(value: string | undefined) {
    this.inputs['kms_key_id'] = value;
  }
  public get labelKeyCase(): string | undefined {
    return this.inputs['label_key_case'] as string | undefined;
  }
  public set labelKeyCase(value: string | undefined) {
    this.inputs['label_key_case'] = value;
  }
  public get labelOrder(): string[] | undefined {
    return this.inputs['label_order'] as string[] | undefined;
  }
  public set labelOrder(value: string[] | undefined) {
    this.inputs['label_order'] = value;
  }
  public get labelValueCase(): string | undefined {
    return this.inputs['label_value_case'] as string | undefined;
  }
  public set labelValueCase(value: string | undefined) {
    this.inputs['label_value_case'] = value;
  }
  public get labelsAsTags(): string[] | undefined {
    return this.inputs['labels_as_tags'] as string[] | undefined;
  }
  public set labelsAsTags(value: string[] | undefined) {
    this.inputs['labels_as_tags'] = value;
  }
  public get logDeliveryConfiguration(): {[key: string]: any}[] | undefined {
    return this.inputs['log_delivery_configuration'] as
      | {[key: string]: any}[]
      | undefined;
  }
  public set logDeliveryConfiguration(
    value: {[key: string]: any}[] | undefined,
  ) {
    this.inputs['log_delivery_configuration'] = value;
  }
  public get maintenanceWindow(): string | undefined {
    return this.inputs['maintenance_window'] as string | undefined;
  }
  public set maintenanceWindow(value: string | undefined) {
    this.inputs['maintenance_window'] = value;
  }
  public get multiAzEnabled(): boolean | undefined {
    return this.inputs['multi_az_enabled'] as boolean | undefined;
  }
  public set multiAzEnabled(value: boolean | undefined) {
    this.inputs['multi_az_enabled'] = value;
  }
  public get name(): string | undefined {
    return this.inputs['name'] as string | undefined;
  }
  public set name(value: string | undefined) {
    this.inputs['name'] = value;
  }
  public get namespace(): string | undefined {
    return this.inputs['namespace'] as string | undefined;
  }
  public set namespace(value: string | undefined) {
    this.inputs['namespace'] = value;
  }
  public get notificationTopicArn(): string | undefined {
    return this.inputs['notification_topic_arn'] as string | undefined;
  }
  public set notificationTopicArn(value: string | undefined) {
    this.inputs['notification_topic_arn'] = value;
  }
  public get okActions(): string[] | undefined {
    return this.inputs['ok_actions'] as string[] | undefined;
  }
  public set okActions(value: string[] | undefined) {
    this.inputs['ok_actions'] = value;
  }
  public get parameter(): any | undefined {
    return this.inputs['parameter'] as any | undefined;
  }
  public set parameter(value: any | undefined) {
    this.inputs['parameter'] = value;
  }
  public get parameterGroupDescription(): string | undefined {
    return this.inputs['parameter_group_description'] as string | undefined;
  }
  public set parameterGroupDescription(value: string | undefined) {
    this.inputs['parameter_group_description'] = value;
  }
  public get port(): number | undefined {
    return this.inputs['port'] as number | undefined;
  }
  public set port(value: number | undefined) {
    this.inputs['port'] = value;
  }
  public get regexReplaceChars(): string | undefined {
    return this.inputs['regex_replace_chars'] as string | undefined;
  }
  public set regexReplaceChars(value: string | undefined) {
    this.inputs['regex_replace_chars'] = value;
  }
  public get replicationGroupId(): string | undefined {
    return this.inputs['replication_group_id'] as string | undefined;
  }
  public set replicationGroupId(value: string | undefined) {
    this.inputs['replication_group_id'] = value;
  }
  public get securityGroupCreateBeforeDestroy(): boolean | undefined {
    return this.inputs['security_group_create_before_destroy'] as
      | boolean
      | undefined;
  }
  public set securityGroupCreateBeforeDestroy(value: boolean | undefined) {
    this.inputs['security_group_create_before_destroy'] = value;
  }
  public get securityGroupCreateTimeout(): string | undefined {
    return this.inputs['security_group_create_timeout'] as string | undefined;
  }
  public set securityGroupCreateTimeout(value: string | undefined) {
    this.inputs['security_group_create_timeout'] = value;
  }
  public get securityGroupDeleteTimeout(): string | undefined {
    return this.inputs['security_group_delete_timeout'] as string | undefined;
  }
  public set securityGroupDeleteTimeout(value: string | undefined) {
    this.inputs['security_group_delete_timeout'] = value;
  }
  public get securityGroupDescription(): string | undefined {
    return this.inputs['security_group_description'] as string | undefined;
  }
  public set securityGroupDescription(value: string | undefined) {
    this.inputs['security_group_description'] = value;
  }
  public get securityGroupName(): string[] | undefined {
    return this.inputs['security_group_name'] as string[] | undefined;
  }
  public set securityGroupName(value: string[] | undefined) {
    this.inputs['security_group_name'] = value;
  }
  public get snapshotArns(): string[] | undefined {
    return this.inputs['snapshot_arns'] as string[] | undefined;
  }
  public set snapshotArns(value: string[] | undefined) {
    this.inputs['snapshot_arns'] = value;
  }
  public get snapshotName(): string | undefined {
    return this.inputs['snapshot_name'] as string | undefined;
  }
  public set snapshotName(value: string | undefined) {
    this.inputs['snapshot_name'] = value;
  }
  public get snapshotRetentionLimit(): number | undefined {
    return this.inputs['snapshot_retention_limit'] as number | undefined;
  }
  public set snapshotRetentionLimit(value: number | undefined) {
    this.inputs['snapshot_retention_limit'] = value;
  }
  public get snapshotWindow(): string | undefined {
    return this.inputs['snapshot_window'] as string | undefined;
  }
  public set snapshotWindow(value: string | undefined) {
    this.inputs['snapshot_window'] = value;
  }
  public get stage(): string | undefined {
    return this.inputs['stage'] as string | undefined;
  }
  public set stage(value: string | undefined) {
    this.inputs['stage'] = value;
  }
  public get subnets(): string[] | undefined {
    return this.inputs['subnets'] as string[] | undefined;
  }
  public set subnets(value: string[] | undefined) {
    this.inputs['subnets'] = value;
  }
  public get tags(): {[key: string]: string} | undefined {
    return this.inputs['tags'] as {[key: string]: string} | undefined;
  }
  public set tags(value: {[key: string]: string} | undefined) {
    this.inputs['tags'] = value;
  }
  public get tenant(): string | undefined {
    return this.inputs['tenant'] as string | undefined;
  }
  public set tenant(value: string | undefined) {
    this.inputs['tenant'] = value;
  }
  public get transitEncryptionEnabled(): boolean | undefined {
    return this.inputs['transit_encryption_enabled'] as boolean | undefined;
  }
  public set transitEncryptionEnabled(value: boolean | undefined) {
    this.inputs['transit_encryption_enabled'] = value;
  }
  public get useExistingSecurityGroups(): boolean | undefined {
    return this.inputs['use_existing_security_groups'] as boolean | undefined;
  }
  public set useExistingSecurityGroups(value: boolean | undefined) {
    this.inputs['use_existing_security_groups'] = value;
  }
  public get userGroupIds(): string[] | undefined {
    return this.inputs['user_group_ids'] as string[] | undefined;
  }
  public set userGroupIds(value: string[] | undefined) {
    this.inputs['user_group_ids'] = value;
  }
  public get vpcId(): string {
    return this.inputs['vpc_id'] as string;
  }
  public set vpcId(value: string) {
    this.inputs['vpc_id'] = value;
  }
  public get zoneId(): any | undefined {
    return this.inputs['zone_id'] as any | undefined;
  }
  public set zoneId(value: any | undefined) {
    this.inputs['zone_id'] = value;
  }
  public get arnOutput() {
    return this.getString('arn');
  }
  public get clusterEnabledOutput() {
    return this.getString('cluster_enabled');
  }
  public get endpointOutput() {
    return this.getString('endpoint');
  }
  public get engineVersionActualOutput() {
    return this.getString('engine_version_actual');
  }
  public get hostOutput() {
    return this.getString('host');
  }
  public get idOutput() {
    return this.getString('id');
  }
  public get memberClustersOutput() {
    return this.getString('member_clusters');
  }
  public get portOutput() {
    return this.getString('port');
  }
  public get readerEndpointAddressOutput() {
    return this.getString('reader_endpoint_address');
  }
  public get securityGroupIdOutput() {
    return this.getString('security_group_id');
  }
  public get securityGroupNameOutput() {
    return this.getString('security_group_name');
  }
  protected synthesizeAttributes() {
    return this.inputs;
  }
}