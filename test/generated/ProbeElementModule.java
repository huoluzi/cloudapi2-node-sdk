// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeElementModule extends IElementModule { public ProbeElementModule(){super();}
@Override public void createElementWrapper(CreateElementParams params, ElementCreateElementCallback callback) {JavaApiOracle.record("ElementModule","createElementWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void updateElementWrapper(ElementUpdateJavaParams jp, ElementUpdateElementCallback callback) {JavaApiOracle.record("ElementModule","updateElementWrapper",new Object[]{jp});JavaApiOracle.respond(callback);}
@Override public void listElementHierarchyWrapper(ListElementHierarchyJavaParams jp, ElementListHierarchyCallback callback) {JavaApiOracle.record("ElementModule","listElementHierarchyWrapper",new Object[]{jp});JavaApiOracle.respond(callback);}
@Override public void setElementVisibilityWrapper(SetElementVisibilityParams params, ElementSetVisibilityCallback callback) {JavaApiOracle.record("ElementModule","setElementVisibilityWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void deleteElementWrapper(DeleteElementParams params, ElementDeleteElementCallback callback) {JavaApiOracle.record("ElementModule","deleteElementWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public int listenElementCreateWrapper(ElementCreateCallback callback) {JavaApiOracle.record("ElementModule","listenElementCreateWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenElementCreateWrapper(int listen_id) {JavaApiOracle.record("ElementModule","cancelListenElementCreateWrapper",new Object[]{listen_id});}
@Override public int listenElementUpdateWrapper(ElementUpdateCallback callback) {JavaApiOracle.record("ElementModule","listenElementUpdateWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenElementUpdateWrapper(int listen_id) {JavaApiOracle.record("ElementModule","cancelListenElementUpdateWrapper",new Object[]{listen_id});}
@Override public int listenElementDeleteWrapper(ElementDeleteCallback callback) {JavaApiOracle.record("ElementModule","listenElementDeleteWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenElementDeleteWrapper(int listen_id) {JavaApiOracle.record("ElementModule","cancelListenElementDeleteWrapper",new Object[]{listen_id});}
}
