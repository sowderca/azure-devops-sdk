'use strict';

import {
    AccessControlEntriesApi,
    AccessControlListsApi,
    AccountsApi,
    ActionResultsApi,
    AgentGroupsApi,
    AgentcloudsApi,
    AgentcloudtypesApi,
    AgentsApi,
    AnnotatedTagsApi,
    ApprovalsApi,
    ApplicationsApi,
    ArtifactDetailsApi,
    ArtifactLinkTypesApi,
    ArtifactUriQueryApi,
    ArtifactsApi,
    AttachmentsApi,
    AvailabilityApi,
    AuthorizedresourcesApi,
    BacklogconfigurationApi,
    BacklogsApi,
    BadgeApi,
    BehaviorsApi,
    BlobsApi,
    BoardcolumnsApi,
    BoardparentsApi,
    BoardrowsApi,
    BoardsApi,
    BranchesApi,
    BoardusersettingsApi,
    BuildsApi,
    CapacitiesApi,
    CardrulesettingsApi,
    CherryPicksApi,
    CardsettingsApi,
    ChangeTrackingApi,
    ChangesetsApi,
    ChartsApi,
    ClassificationNodesApi,
    ClientApi,
    CodeCoverageApi,
    CodeSearchResultsApi,
    ColumnsApi,
    CommentsApi,
    CommitsApi,
    ConfigurationsApi,
    ControllersApi,
    ControlsApi,
    CounterInstancesApi,
    CounterSamplesApi,
    ConsumersApi,
    CountersApi,
    DashboardsApi,
    DefinitionsApi,
    DeliverytimelineApi,
    DeploymentgroupsApi,
    DeploymentsApi,
    DescriptorsApi,
    DiagnosticLogsApi,
    DiagnosticsApi,
    DiffsApi,
    EndpointproxyApi,
    EndpointsApi,
    ErrorsApi,
    EvaluationsApi,
    EventTypesApi,
    EventsApi,
    ExecutionhistoryApi,
    FeedManagementApi,
    FieldsApi,
    FoldersApi,
    ForksApi,
    GatesApi,
    GroupEntitlementsApi,
    GroupsApi,
    ImportRequestsApi,
    InstalledExtensionsApi,
    ItemsApi,
    IterationsApi,
    LabelsApi,
    LatestApi,
    LayoutApi,
    ListsApi,
    ManualInterventionsApi,
    MavenApi,
    MembersApi,
    MembershipStatesApi,
    MembershipsApi,
    MergeBasesApi,
    MessagesApi,
    MetricsApi,
    NotificationsApi,
    NpmApi,
    NuGetApi,
    OperationsApi,
    OptionsApi,
    PageMovesApi,
    PagesApi,
    PermissionsApi,
    ParameterResultsApi,
    PersonalAccessTokensApi,
    PluginsApi,
    PlansApi,
    PointsApi,
    PolicyConfigurationsApi,
    ProcessconfigurationApi,
    ProcessesApi,
    ProfilesApi,
    ProjectsApi,
    PropertiesApi,
    ProvenanceApi,
    ProviderInfoApi,
    PublishersApi,
    PullRequestIterationChangesApi,
    PullRequestCommentLikesApi,
    PullRequestIterationStatusesApi,
    PullRequestAttachmentsApi,
    PullRequestIterationsApi,
    PullRequestCommitsApi,
    PullRequestLabelsApi,
    PullRequestThreadCommentsApi,
    PullRequestPropertiesApi,
    PullRequestQueryApi,
    PullRequestReviewersApi,
    PullRequestShareApi,
    PullRequestStatusesApi,
    PullRequestThreadsApi,
    PullRequestWorkItemsApi,
    PullRequestsApi,
    PushesApi,
    PythonApi,
    QueriesApi,
    RecycleBinApi,
    RecyclebinApi,
    RefsApi,
    RefsFavoritesApi,
    ReleasesApi,
    ReportApi,
    ReportingWorkItemLinksApi,
    ReportingWorkItemRevisionsApi,
    RepositoriesApi,
    RequestsApi,
    ResultRetentionSettingsApi,
    ResultsApi,
    ResourceUsageApi,
    ResourcesApi,
    RetentionPoliciesApi,
    RevertsApi,
    RevisionsApi,
    RevocationsApi,
    RowsApi,
    RevocationRulesApi,
    RunsApi,
    RulesApi,
    SecurityNamespacesApi,
    SessionApi,
    ServiceSettingsApi,
    SettingsApi,
    ShelvesetsApi,
    SourceProvidersApi,
    StatesApi,
    StatusApi,
    StatusesApi,
    StorageKeysApi,
    StatsApi,
    SubjectLookupApi,
    SubscriptionsApi,
    SuggestionsApi,
    SubscribersApi,
    SymsrvApi,
    SuiteTestCaseApi,
    TagsApi,
    TargetsApi,
    TaskgroupsApi,
    TeamdaysoffApi,
    TeamfieldvaluesApi,
    TeamsApi,
    TeamsettingsApi,
    TemplatesApi,
    TestCasesApi,
    TestDefinitionsApi,
    TestDropsApi,
    TestHistoryApi,
    TestPlanCloneApi,
    TestPlansApi,
    TestRunsApi,
    TestPointApi,
    TestSuiteCloneApi,
    TestSuiteEntryApi,
    TestSuitesApi,
    TimelineApi,
    TokenListGlobalIdentitiesApi,
    TokenPersonalAccessTokensApi,
    TokenRevocationsApi,
    TreesApi,
    TypesApi,
    UniversalApi,
    UpdatesApi,
    UserEntitlementSummaryApi,
    UserEntitlementsApi,
    UsersApi,
    VariablegroupsApi,
    VariablesApi,
    WidgetTypesApi,
    WidgetsApi,
    WikiSearchResultsApi,
    WikisApi,
    WiqlApi,
    WorkItemIconsApi,
    WorkItemRelationTypesApi,
    WorkItemSearchResultsApi,
    WorkItemTransitionsApi,
    WorkItemTypeCategoriesApi,
    WorkItemTypeStatesApi,
    WorkItemTypesApi,
    WorkItemTypesBehaviorsApi,
    WorkItemTypesFieldApi,
    WorkItemsApi
} from './api/api'
import * as environment from './helpers/environment';

export class ApiClient {
    public readonly AccessControlEntriesApi: AccessControlEntriesApi;
    public readonly AccessControlListsApi: AccessControlListsApi;
    public readonly AccountsApi: AccountsApi;
    public readonly ActionResultsApi: ActionResultsApi;
    public readonly AgentGroupsApi: AgentGroupsApi;
    public readonly AgentCloudsApi: AgentcloudsApi;
    public readonly AgentCloudTypesApi: AgentcloudtypesApi;
    public readonly AgentsApi: AgentsApi;
    public readonly AnnotatedTagsApi: AnnotatedTagsApi;
    public readonly ApprovalsApi: ApprovalsApi;
    public readonly ApplicationsApi: ApplicationsApi;
    public readonly ArtifactDetailsApi: ArtifactDetailsApi;
    public readonly ArtifactLinkTypesApi: ArtifactLinkTypesApi;
    public readonly ArtifactUriQueryApi: ArtifactUriQueryApi;
    public readonly ArtifactsApi: ArtifactsApi;
    public readonly AttachmentsApi: AttachmentsApi;
    public readonly AvailabilityApi: AvailabilityApi;
    public readonly AuthorizedResourcesApi: AuthorizedresourcesApi;
    public readonly BacklogConfigurationApi: BacklogconfigurationApi;
    public readonly BacklogsApi: BacklogsApi;
    public readonly BadgeApi: BadgeApi;
    public readonly BehaviorsApi: BehaviorsApi;
    public readonly BlobsApi: BlobsApi;
    public readonly BoardColumnsApi: BoardcolumnsApi;
    public readonly BoardParentsApi: BoardparentsApi;
    public readonly BoardRowsApi: BoardrowsApi;
    public readonly BoardsApi: BoardsApi;
    public readonly BranchesApi: BranchesApi;
    public readonly BoardUserSettingsApi: BoardusersettingsApi;
    public readonly BuildsApi: BuildsApi;
    public readonly CapacitiesApi: CapacitiesApi;
    public readonly CardRuleSettingsApi: CardrulesettingsApi;
    public readonly CherryPicksApi: CherryPicksApi;
    public readonly CardSettingsApi: CardsettingsApi;
    public readonly ChangeTrackingApi: ChangeTrackingApi;
    public readonly ChangeSetsApi: ChangesetsApi;
    public readonly ChartsApi: ChartsApi;
    public readonly ClassificationNodesApi: ClassificationNodesApi;
    public readonly ClientApi: ClientApi;
    public readonly CodeCoverageApi: CodeCoverageApi;
    public readonly CodeSearchResultsApi: CodeSearchResultsApi;
    public readonly ColumnsApi: ColumnsApi;
    public readonly CommentsApi: CommentsApi;
    public readonly CommitsApi: CommitsApi;
    public readonly ConfigurationsApi: ConfigurationsApi;
    public readonly ControllersApi: ControllersApi;
    public readonly ControlsApi: ControlsApi;
    public readonly CounterInstancesApi: CounterInstancesApi;
    public readonly CounterSamplesApi: CounterSamplesApi;
    public readonly ConsumersApi: ConsumersApi;
    public readonly CountersApi: CountersApi;
    public readonly DashboardsApi: DashboardsApi;
    public readonly DefinitionsApi: DefinitionsApi;
    public readonly DeliveryTimelineApi: DeliverytimelineApi;
    public readonly DeploymentGroupsApi: DeploymentgroupsApi;
    public readonly DeploymentsApi: DeploymentsApi;
    public readonly DescriptorsApi: DescriptorsApi;
    public readonly DiagnosticLogsApi: DiagnosticLogsApi;
    public readonly DiagnosticsApi: DiagnosticsApi;
    public readonly DiffsApi: DiffsApi;
    public readonly EndpointProxyApi: EndpointproxyApi;
    public readonly EndpointsApi: EndpointsApi;
    public readonly ErrorsApi: ErrorsApi;
    public readonly EvaluationsApi: EvaluationsApi;
    public readonly EventTypesApi: EventTypesApi;
    public readonly EventsApi: EventsApi;
    public readonly ExecutionHistoryApi: ExecutionhistoryApi;
    public readonly FeedManagementApi: FeedManagementApi;
    public readonly FieldsApi: FieldsApi;
    public readonly FoldersApi: FoldersApi;
    public readonly ForksApi: ForksApi;
    public readonly GatesApi: GatesApi;
    public readonly GroupEntitlementsApi: GroupEntitlementsApi;
    public readonly GroupsApi: GroupsApi;
    public readonly ImportRequestsApi: ImportRequestsApi
    public readonly InstalledExtensionsApi: InstalledExtensionsApi;
    public readonly ItemsApi: ItemsApi;
    public readonly IterationsApi: IterationsApi;
    public readonly LabelsApi: LabelsApi;
    public readonly LatestApi: LatestApi;
    public readonly LayoutApi: LayoutApi;
    public readonly ListsApi: ListsApi;
    public readonly ManualInterventionsApi: ManualInterventionsApi;
    public readonly MavenApi: MavenApi;
    public readonly MembersApi: MembersApi;
    public readonly MembershipStatesApi: MembershipStatesApi;
    public readonly MembershipsApi: MembershipsApi;
    public readonly MergeBasesApi: MergeBasesApi;
    public readonly MessagesApi: MessagesApi;
    public readonly MetricsApi: MetricsApi;
    public readonly NotificationsApi: NotificationsApi;
    public readonly NpmApi: NpmApi;
    public readonly NuGetApi: NuGetApi;
    public readonly OperationsApi: OperationsApi;
    public readonly OptionsApi: OptionsApi;
    public readonly PageMovesApi: PageMovesApi;
    public readonly PagesApi: PagesApi;
    public readonly PermissionsApi: PermissionsApi;
    public readonly ParameterResultsApi: ParameterResultsApi;
    public readonly PersonalAccessTokensApi: PersonalAccessTokensApi;
    public readonly PluginsApi: PluginsApi;
    public readonly PlansApi: PlansApi;
    public readonly PointsApi: PointsApi;
    public readonly PolicyConfigurationsApi: PolicyConfigurationsApi;
    public readonly ProcessConfigurationApi: ProcessconfigurationApi;
    public readonly ProcessesApi: ProcessesApi;
    public readonly ProfilesApi: ProfilesApi;
    public readonly ProjectsApi: ProjectsApi;
    public readonly PropertiesApi: PropertiesApi;
    public readonly ProvenanceApi: ProvenanceApi;
    public readonly ProviderInfoApi: ProviderInfoApi;
    public readonly PublishersApi: PublishersApi;
    public readonly PullRequestIterationChangesApi: PullRequestIterationChangesApi;
    public readonly PullRequestCommentLikesApi: PullRequestCommentLikesApi;
    public readonly PullRequestIterationStatusesApi: PullRequestIterationStatusesApi;
    public readonly PullRequestAttachmentsApi: PullRequestAttachmentsApi;
    public readonly PullRequestIterationsApi: PullRequestIterationsApi;
    public readonly PullRequestCommitsApi: PullRequestCommitsApi;
    public readonly PullRequestLabelsApi: PullRequestLabelsApi;
    public readonly PullRequestThreadCommentsApi: PullRequestThreadCommentsApi;
    public readonly PullRequestPropertiesApi: PullRequestPropertiesApi;
    public readonly PullRequestQueryApi: PullRequestQueryApi;
    public readonly PullRequestReviewersApi: PullRequestReviewersApi;
    public readonly PullRequestShareApi: PullRequestShareApi;
    public readonly PullRequestStatusesApi: PullRequestStatusesApi;
    public readonly PullRequestThreadsApi: PullRequestThreadsApi;
    public readonly PullRequestWorkItemsApi: PullRequestWorkItemsApi;
    public readonly PullRequestsApi: PullRequestsApi;
    public readonly PushesApi: PushesApi;
    public readonly PythonApi: PythonApi;
    public readonly QueriesApi: QueriesApi;
    public readonly RecycleBinApi: RecycleBinApi;
    public readonly WorkItemTrackingRecycleBinApi: RecyclebinApi;
    public readonly RefsApi: RefsApi;
    public readonly RefsFavoritesApi: RefsFavoritesApi;
    public readonly ReleasesApi: ReleasesApi;
    public readonly ReportApi: ReportApi;
    public readonly ReportingWorkItemLinksApi: ReportingWorkItemLinksApi;
    public readonly ReportingWorkItemRevisionsApi: ReportingWorkItemRevisionsApi;
    public readonly RepositoriesApi: RepositoriesApi;
    public readonly RequestsApi: RequestsApi;
    public readonly ResultRetentionSettingsApi: ResultRetentionSettingsApi;
    public readonly ResultsApi: ResultsApi;
    public readonly ResourceUsageApi: ResourceUsageApi;
    public readonly ResourcesApi: ResourcesApi;
    public readonly RetentionPoliciesApi: RetentionPoliciesApi;
    public readonly RevertsApi: RevertsApi;
    public readonly RevisionsApi: RevisionsApi;
    public readonly RevocationsApi: RevocationsApi;
    public readonly RowsApi: RowsApi;
    public readonly RevocationRulesApi: RevocationRulesApi;
    public readonly RunsApi: RunsApi;
    public readonly RulesApi: RulesApi;
    public readonly SecurityNamespacesApi: SecurityNamespacesApi;
    public readonly SessionApi: SessionApi;
    public readonly ServiceSettingsApi: ServiceSettingsApi;
    public readonly SettingsApi: SettingsApi;
    public readonly ShelveSetsApi: ShelvesetsApi
    public readonly SourceProvidersApi: SourceProvidersApi;
    public readonly StatesApi: StatesApi;
    public readonly StatusApi: StatusApi;
    public readonly StatusesApi: StatusesApi;
    public readonly StorageKeysApi: StorageKeysApi;
    public readonly StatsApi: StatsApi;
    public readonly SubjectLookupApi: SubjectLookupApi;
    public readonly SubscriptionsApi: SubscriptionsApi;
    public readonly SuggestionsApi: SuggestionsApi;
    public readonly SubscribersApi: SubscribersApi;
    public readonly SymsrvApi: SymsrvApi;
    public readonly SuiteTestCaseApi: SuiteTestCaseApi;
    public readonly TagsApi: TagsApi;
    public readonly TargetsApi: TargetsApi;
    public readonly TaskGroupsApi: TaskgroupsApi
    public readonly TeamDaysOffApi: TeamdaysoffApi;
    public readonly TeamFieldValuesApi: TeamfieldvaluesApi;
    public readonly TeamsApi: TeamsApi;
    public readonly TeamSettingsApi: TeamsettingsApi;
    public readonly TemplatesApi: TemplatesApi;
    public readonly TestCasesApi: TestCasesApi;
    public readonly TestDefinitionsApi: TestDefinitionsApi;
    public readonly TestDropsApi: TestDropsApi;
    public readonly TestHistoryApi: TestHistoryApi;
    public readonly TestPlanCloneApi: TestPlanCloneApi;
    public readonly TestPlansApi: TestPlansApi;
    public readonly TestRunsApi: TestRunsApi;
    public readonly TestPointApi: TestPointApi;
    public readonly TestSuiteCloneApi: TestSuiteCloneApi;
    public readonly TestSuiteEntryApi: TestSuiteEntryApi;
    public readonly TestSuitesApi: TestSuitesApi;
    public readonly TimelineApi: TimelineApi;
    public readonly TokenListGlobalIdentitiesApi: TokenListGlobalIdentitiesApi;
    public readonly TokenPersonalAccessTokensApi: TokenPersonalAccessTokensApi;
    public readonly TokenRevocationsApi: TokenRevocationsApi;
    public readonly TreesApi: TreesApi;
    public readonly TypesApi: TypesApi;
    public readonly UniversalApi: UniversalApi;
    public readonly UpdatesApi: UpdatesApi;
    public readonly UserEntitlementSummaryApi: UserEntitlementSummaryApi;
    public readonly UserEntitlementsApi: UserEntitlementsApi;
    public readonly UsersApi: UsersApi;
    public readonly VariableGroupsApi: VariablegroupsApi;
    public readonly VariablesApi: VariablesApi;
    public readonly WidgetTypesApi: WidgetTypesApi;
    public readonly WidgetsApi: WidgetsApi;
    public readonly WikiSearchResultsApi: WikiSearchResultsApi;
    public readonly WikisApi: WikisApi;
    public readonly WIQLApi: WiqlApi;
    public readonly WorkItemIconsApi: WorkItemIconsApi;
    public readonly WorkItemRelationTypesApi: WorkItemRelationTypesApi;
    public readonly WorkItemSearchResultsApi: WorkItemSearchResultsApi;
    public readonly WorkItemTransitionsApi: WorkItemTransitionsApi;
    public readonly WorkItemTypeCategoriesApi: WorkItemTypeCategoriesApi;
    public readonly WorkItemTypeStatesApi: WorkItemTypeStatesApi;
    public readonly WorkItemTypesApi: WorkItemTypesApi;
    public readonly WorkItemTypesBehaviorsApi: WorkItemTypesBehaviorsApi
    public readonly WorkItemTypesFieldApi: WorkItemTypesFieldApi;
    public readonly WorkItemsApi: WorkItemsApi;
    private readonly authKey: string;
    private readonly host: string;
    /**
     * Create an instance of the ApiClient wrapper class using the default host URL. If called this way the organization must be passed in when invoking methods that call the REST API.
     * @constructor
     * @param key - Personal Access Token
     */

    public constructor(key: string);
    /**
     * Creates an instance of the ApiClient wrapper class using the default host URL. If called this way the organization must be passed in when invoking methods that call the REST API.
     * @constructor
     * @param key - Personal Access Token
     * @param username - The username or email address
     */

    public constructor(key: string, username: string);
    /**
     * Creates an instance of the ApiClient wrapper class, appending the specified organization to the default URL.
     * @constructor
     * @param key - Personal Access Token
     * @param username - The username or email address
     * @param organization - The organization to be appended to the URL.
     */
    public constructor(key: string, username: string, organization: string);
    /**
     * Creates an instance of the ApiClient wrapper class, appending the specified organization to the default URL.
     * @constructor
     * @param key - Personal Access Token
     * @param username - The username or email address
     * @param organization - The organization to be appended to the URL.
     */
    public constructor(key: string, username?: string, organization?: string) {
        this.host = 'https://dev.azure.com/';
        if (username) {
            if (environment.isBrowser) {
                this.authKey = btoa(`${username}:${key}`);
            } else if (environment.isNode) {
                this.authKey = Buffer.from(`${username}:${key}`).toString('base64');
            }
        } else {
            this.authKey = key;
        }
        if (organization) {
            this.host += organization;
        }
        this.AccessControlEntriesApi = new AccessControlEntriesApi(this.host);
        this.AccessControlListsApi = new AccessControlListsApi(this.host);
        this.AccountsApi = new AccountsApi(this.host);
        this.ActionResultsApi = new ActionResultsApi(this.host);
        this.AgentCloudTypesApi = new AgentcloudtypesApi(this.host);
        this.AgentCloudsApi = new AgentcloudsApi(this.host);
        this.AgentGroupsApi = new AgentGroupsApi(this.host);
        this.AgentsApi = new AgentsApi(this.host);
        this.AnnotatedTagsApi = new AnnotatedTagsApi(this.host);
        this.ApplicationsApi = new ApplicationsApi(this.host);
        this.ApprovalsApi = new ApprovalsApi(this.host);
        this.ArtifactDetailsApi = new ArtifactDetailsApi(this.host);
        this.ArtifactLinkTypesApi = new ArtifactLinkTypesApi(this.host);
        this.ArtifactUriQueryApi = new ArtifactUriQueryApi(this.host);
        this.ArtifactsApi = new ArtifactsApi(this.host);
        this.AttachmentsApi = new AttachmentsApi(this.host);
        this.AuthorizedResourcesApi = new AuthorizedresourcesApi(this.host);
        this.AvailabilityApi = new AvailabilityApi(this.host);
        this.BacklogConfigurationApi = new BacklogconfigurationApi(this.host);
        this.BacklogsApi = new BacklogsApi(this.host);
        this.BadgeApi = new BadgeApi(this.host);
        this.BehaviorsApi = new BehaviorsApi(this.host);
        this.BlobsApi = new BlobsApi(this.host);
        this.BoardColumnsApi = new BoardcolumnsApi(this.host);
        this.BoardParentsApi = new BoardparentsApi(this.host);
        this.BoardRowsApi = new BoardrowsApi(this.host);
        this.BoardUserSettingsApi = new BoardusersettingsApi(this.host);
        this.BoardsApi = new BoardsApi(this.host);
        this.BranchesApi = new BranchesApi(this.host);
        this.BuildsApi = new BuildsApi(this.host);
        this.CapacitiesApi = new CapacitiesApi(this.host);
        this.CardRuleSettingsApi = new CardrulesettingsApi(this.host);
        this.CardSettingsApi = new CardsettingsApi(this.host);
        this.ChangeSetsApi = new ChangesetsApi(this.host);
        this.ChangeTrackingApi = new ChangeTrackingApi(this.host);
        this.ChartsApi = new ChartsApi(this.host);
        this.CherryPicksApi = new CherryPicksApi(this.host);
        this.ClassificationNodesApi = new ClassificationNodesApi(this.host);
        this.ClientApi = new ClientApi(this.host);
        this.CodeCoverageApi = new CodeCoverageApi(this.host);
        this.CodeSearchResultsApi = new CodeSearchResultsApi(this.host);
        this.ColumnsApi = new ColumnsApi(this.host);
        this.CommentsApi = new CommentsApi(this.host);
        this.CommitsApi = new CommitsApi(this.host);
        this.ConfigurationsApi = new ConfigurationsApi(this.host);
        this.ConsumersApi = new ConsumersApi(this.host);
        this.ControllersApi = new ControllersApi(this.host);
        this.ControlsApi = new ControlsApi(this.host);
        this.CounterInstancesApi = new CounterInstancesApi(this.host);
        this.CounterSamplesApi = new CounterSamplesApi(this.host);
        this.CountersApi = new CountersApi(this.host);
        this.DashboardsApi = new DashboardsApi(this.host);
        this.DefinitionsApi = new DefinitionsApi(this.host);
        this.DeliveryTimelineApi = new DeliverytimelineApi(this.host);
        this.DeploymentGroupsApi = new DeploymentgroupsApi(this.host);
        this.DeploymentsApi = new DeploymentsApi(this.host);
        this.DescriptorsApi = new DescriptorsApi(this.host);
        this.DiagnosticLogsApi = new DiagnosticLogsApi(this.host);
        this.DiagnosticsApi = new DiagnosticsApi(this.host);
        this.DiffsApi = new DiffsApi(this.host);
        this.EndpointProxyApi = new EndpointproxyApi(this.host);
        this.EndpointsApi = new EndpointsApi(this.host);
        this.ErrorsApi = new ErrorsApi(this.host);
        this.EvaluationsApi = new EvaluationsApi(this.host);
        this.EventTypesApi = new EventTypesApi(this.host);
        this.EventsApi = new EventsApi(this.host);
        this.ExecutionHistoryApi = new ExecutionhistoryApi(this.host);
        this.FeedManagementApi = new FeedManagementApi(this.host);
        this.FieldsApi = new FieldsApi(this.host);
        this.FoldersApi = new FoldersApi(this.host);
        this.ForksApi = new ForksApi(this.host);
        this.GatesApi = new GatesApi(this.host);
        this.GroupEntitlementsApi = new GroupEntitlementsApi(this.host);
        this.GroupsApi = new GroupsApi(this.host);
        this.ImportRequestsApi = new ImportRequestsApi(this.host);
        this.InstalledExtensionsApi = new InstalledExtensionsApi(this.host);
        this.ItemsApi = new ItemsApi(this.host);
        this.IterationsApi = new IterationsApi(this.host);
        this.LabelsApi = new LabelsApi(this.host);
        this.LatestApi = new LatestApi(this.host);
        this.LayoutApi = new LayoutApi(this.host);
        this.ListsApi = new ListsApi(this.host);
        this.ManualInterventionsApi = new ManualInterventionsApi(this.host);
        this.MavenApi = new MavenApi(this.host);
        this.MembersApi = new MembersApi(this.host);
        this.MembershipStatesApi = new MembershipStatesApi(this.host);
        this.MembershipsApi = new MembershipsApi(this.host);
        this.MergeBasesApi = new MergeBasesApi(this.host);
        this.MessagesApi = new MessagesApi(this.host);
        this.MetricsApi = new MetricsApi(this.host);
        this.NotificationsApi = new NotificationsApi(this.host);
        this.NpmApi = new NpmApi(this.host);
        this.NuGetApi = new NuGetApi(this.host);
        this.OperationsApi = new OperationsApi(this.host);
        this.OptionsApi = new OptionsApi(this.host);
        this.PageMovesApi = new PageMovesApi(this.host);
        this.PagesApi = new PagesApi(this.host);
        this.ParameterResultsApi = new ParameterResultsApi(this.host);
        this.PermissionsApi = new PermissionsApi(this.host);
        this.PersonalAccessTokensApi = new PersonalAccessTokensApi(this.host);
        this.PlansApi = new PlansApi(this.host);
        this.PluginsApi = new PluginsApi(this.host);
        this.PointsApi = new PointsApi(this.host);
        this.PolicyConfigurationsApi = new PolicyConfigurationsApi(this.host);
        this.ProcessConfigurationApi = new ProcessconfigurationApi(this.host);
        this.ProcessesApi = new ProcessesApi(this.host);
        this.ProfilesApi = new ProfilesApi(this.host);
        this.ProjectsApi = new ProjectsApi(this.host);
        this.PropertiesApi = new PropertiesApi(this.host);
        this.ProvenanceApi = new ProvenanceApi(this.host);
        this.ProviderInfoApi = new ProviderInfoApi(this.host);
        this.PublishersApi = new PublishersApi(this.host);
        this.PullRequestAttachmentsApi = new PullRequestAttachmentsApi(this.host);
        this.PullRequestCommentLikesApi = new PullRequestCommentLikesApi(this.host);
        this.PullRequestCommitsApi = new PullRequestCommitsApi(this.host);
        this.PullRequestIterationChangesApi = new PullRequestIterationChangesApi(this.host);
        this.PullRequestIterationStatusesApi = new PullRequestIterationStatusesApi(this.host);
        this.PullRequestIterationsApi = new PullRequestIterationsApi(this.host);
        this.PullRequestLabelsApi = new PullRequestLabelsApi(this.host);
        this.PullRequestPropertiesApi = new PullRequestPropertiesApi(this.host);
        this.PullRequestQueryApi = new PullRequestQueryApi(this.host);
        this.PullRequestReviewersApi = new PullRequestReviewersApi(this.host);
        this.PullRequestShareApi = new PullRequestShareApi(this.host);
        this.PullRequestStatusesApi = new PullRequestStatusesApi(this.host);
        this.PullRequestThreadCommentsApi = new PullRequestThreadCommentsApi(this.host);
        this.PullRequestThreadsApi = new PullRequestThreadsApi(this.host);
        this.PullRequestWorkItemsApi = new PullRequestWorkItemsApi(this.host);
        this.PullRequestsApi = new PullRequestsApi(this.host);
        this.PushesApi = new PushesApi(this.host);
        this.PythonApi = new PythonApi(this.host);
        this.QueriesApi = new QueriesApi(this.host);
        this.RecycleBinApi = new RecycleBinApi(this.host);
        this.RefsApi = new RefsApi(this.host);
        this.RefsFavoritesApi = new RefsFavoritesApi(this.host);
        this.ReleasesApi = new ReleasesApi(this.host);
        this.ReportApi = new ReportApi(this.host);
        this.ReportingWorkItemLinksApi = new ReportingWorkItemLinksApi(this.host);
        this.ReportingWorkItemRevisionsApi = new ReportingWorkItemRevisionsApi(this.host);
        this.RepositoriesApi = new RepositoriesApi(this.host);
        this.RequestsApi = new RequestsApi(this.host);
        this.ResourceUsageApi = new ResourceUsageApi(this.host);
        this.ResourcesApi = new ResourcesApi(this.host);
        this.ResultRetentionSettingsApi = new ResultRetentionSettingsApi(this.host);
        this.ResultsApi = new ResultsApi(this.host);
        this.RetentionPoliciesApi = new RetentionPoliciesApi(this.host);
        this.RevertsApi = new RevertsApi(this.host);
        this.RevisionsApi = new RevisionsApi(this.host);
        this.RevocationRulesApi = new RevocationRulesApi(this.host);
        this.RevocationsApi = new RevocationsApi(this.host);
        this.RowsApi = new RowsApi(this.host);
        this.RulesApi = new RulesApi(this.host);
        this.RunsApi = new RunsApi(this.host);
        this.SecurityNamespacesApi = new SecurityNamespacesApi(this.host);
        this.ServiceSettingsApi = new ServiceSettingsApi(this.host);
        this.SessionApi = new SessionApi(this.host);
        this.SettingsApi = new SettingsApi(this.host);
        this.ShelveSetsApi = new ShelvesetsApi(this.host);
        this.SourceProvidersApi = new SourceProvidersApi(this.host);
        this.StatesApi = new StatesApi(this.host);
        this.StatsApi = new StatsApi(this.host);
        this.StatusApi = new StatusApi(this.host);
        this.StatusesApi = new StatusesApi(this.host);
        this.StorageKeysApi = new StorageKeysApi(this.host);
        this.SubjectLookupApi = new SubjectLookupApi(this.host);
        this.SubscribersApi = new SubscribersApi(this.host);
        this.SuggestionsApi = new SuggestionsApi(this.host);
        this.SuiteTestCaseApi = new SuiteTestCaseApi(this.host);
        this.SymsrvApi = new SymsrvApi(this.host);
        this.TagsApi = new TagsApi(this.host);
        this.TargetsApi = new TargetsApi(this.host);
        this.TaskGroupsApi = new TaskgroupsApi(this.host);
        this.TeamDaysOffApi = new TeamdaysoffApi(this.host);
        this.TeamFieldValuesApi = new TeamfieldvaluesApi(this.host);
        this.TeamSettingsApi = new TeamsettingsApi(this.host);
        this.TeamsApi = new TeamsApi(this.host);
        this.TemplatesApi = new TemplatesApi(this.host);
        this.TestCasesApi = new TestCasesApi(this.host);
        this.TestDefinitionsApi = new TestDefinitionsApi(this.host);
        this.TestDropsApi = new TestDropsApi(this.host);
        this.TestHistoryApi = new TestHistoryApi(this.host);
        this.TestPlanCloneApi = new TestPlanCloneApi(this.host);
        this.TestPlansApi = new TestPlansApi(this.host);
        this.TestPointApi = new TestPointApi(this.host);
        this.TestRunsApi = new TestRunsApi(this.host);
        this.TestSuiteCloneApi = new TestSuiteCloneApi(this.host);
        this.TestSuiteEntryApi = new TestSuiteEntryApi(this.host);
        this.TestSuitesApi = new TestSuitesApi(this.host);
        this.TimelineApi = new TimelineApi(this.host);
        this.TokenListGlobalIdentitiesApi = new TokenListGlobalIdentitiesApi(this.host);
        this.TokenPersonalAccessTokensApi = new TokenPersonalAccessTokensApi(this.host);
        this.TokenRevocationsApi = new TokenRevocationsApi(this.host);
        this.TreesApi = new TreesApi(this.host);
        this.TypesApi = new TypesApi(this.host);
        this.UniversalApi = new UniversalApi(this.host);
        this.UpdatesApi = new UpdatesApi(this.host);
        this.UserEntitlementSummaryApi = new UserEntitlementSummaryApi(this.host);
        this.UserEntitlementsApi = new UserEntitlementsApi(this.host);
        this.UsersApi = new UsersApi(this.host);
        this.VariableGroupsApi = new VariablegroupsApi(this.host);
        this.VariablesApi = new VariablesApi(this.host);
        this.WIQLApi = new WiqlApi(this.host);
        this.WidgetTypesApi = new WidgetTypesApi(this.host);
        this.WidgetsApi = new WidgetsApi(this.host);
        this.WikiSearchResultsApi = new WikiSearchResultsApi(this.host);
        this.WikisApi = new WikisApi(this.host);
        this.WorkItemIconsApi = new WorkItemIconsApi(this.host);
        this.WorkItemRelationTypesApi = new WorkItemRelationTypesApi(this.host);
        this.WorkItemSearchResultsApi = new WorkItemSearchResultsApi(this.host);
        this.WorkItemTrackingRecycleBinApi = new RecyclebinApi(this.host);
        this.WorkItemTransitionsApi = new WorkItemTransitionsApi(this.host);
        this.WorkItemTypeCategoriesApi = new WorkItemTypeCategoriesApi(this.host);
        this.WorkItemTypeStatesApi = new WorkItemTypeStatesApi(this.host);
        this.WorkItemTypesApi = new WorkItemTypesApi(this.host);
        this.WorkItemTypesBehaviorsApi = new WorkItemTypesBehaviorsApi(this.host);
        this.WorkItemTypesFieldApi = new WorkItemTypesFieldApi(this.host);
        this.WorkItemsApi = new WorkItemsApi(this.host);
        Object.getOwnPropertyNames(this).filter((property: string): boolean => property.toLowerCase().includes('api')).forEach((property: string): void => {
            // @ts-ignore
            Reflect.defineProperty(this[property], 'defaultHeaders', {
                value: { 'Authorization': `Basic ${this.authKey}` }
            });
        });
    }
    /**
     * Headers set on all the wrapped API classes.
     * @access public
     * @param headers - The headers to be set on all the initiated API classes.
     * @description Could be used to set other forms of authentication outside of the PAT basic authentication provided by the default constructors.
     */
    public set Headers(headers: Headers | Map<string, string>) {
        const updatedHeaders: { [key: string]: string } = { };
        headers.forEach((value: string, key: string) => updatedHeaders[key] = value);
        Object.getOwnPropertyNames(this).filter((property: string): boolean => property.toLowerCase().includes('api')).forEach((property: string): void => {
            Reflect.defineProperty(this[property], 'defaultHeaders', { value: updatedHeaders });
        });
    }
}

export * from './api/api';
export default ApiClient
