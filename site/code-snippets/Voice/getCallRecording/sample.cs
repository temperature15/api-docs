var username = System.Environment.GetEnvironmentVariable("BW_USERNAME");
var password = System.Environment.GetEnvironmentVariable("BW_PASSWORD");
var accountId = System.Environment.GetEnvironmentVariable("BW_ACCOUNT_ID");

// Call id is returned after successfully creating a call.
var callId = "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d";
// Recording id is returned after retrieving a recording from the call.
var recordingId = "r-d68201ef-d53e-4c6d-a743-1c1283909d41";

var client = new BandwidthClient.Builder()
    .VoiceBasicAuthCredentials(username, password)
    .Build();

var response = await client.Voice.APIController.GetMetadataForRecordingAsync(accountId, callId, recordingId);