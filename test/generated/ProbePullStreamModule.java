// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbePullStreamModule extends IPullStreamModule { public ProbePullStreamModule(){super();}
@Override public void stop() {JavaApiOracle.record("PullStreamModule","stop",new Object[]{});}
@Override public void unSubscribeStream(int listen_id) {JavaApiOracle.record("PullStreamModule","unSubscribeStream",new Object[]{listen_id});}
@Override public boolean isStreaming() {JavaApiOracle.record("PullStreamModule","isStreaming",new Object[]{});return true;}
@Override public String getStreamInfo() {JavaApiOracle.record("PullStreamModule","getStreamInfo",new Object[]{});return "FIXTURE-SN";}
@Override public void startWrapper(String stream_url, PullStreamStartCallback callback) {JavaApiOracle.record("PullStreamModule","startWrapper",new Object[]{stream_url});JavaApiOracle.respond(callback);}
@Override public int subscribeStreamWrapper(PullStreamDataCallback callback) {JavaApiOracle.record("PullStreamModule","subscribeStreamWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void setErrorCallbackWrapper(PullStreamErrorCallback callback) {JavaApiOracle.record("PullStreamModule","setErrorCallbackWrapper",new Object[]{});JavaApiOracle.respond(callback);}
}
